import { changePassword } from "./api/authn/change-password.mjs"
import { decodeTokenPayload, tokenIsValid } from "./utils/jwt-helpers/index.mjs"
import { deleteAccount } from "./api/authn/delete-account.mjs"
import { EmailValidatorWithCaching } from "./utils/email-validator-with-caching.mjs"
import { getRequestBody } from "./utils/get-request-body.mjs"
import { getRequestCookie } from "./utils/cookie-helpers/index.mjs"
import { Logger } from "@jrc03c/logger"
import { PasswordManager } from "./utils/password-manager.mjs"
import { randomString } from "@jrc03c/js-crypto-helpers"
import { read } from "./api/db/read.mjs"
import { register } from "./api/authn/register.mjs"
import { sendOTPEmail } from "./api/authn/send-otp-email.mjs"
import { signOut } from "./api/authn/sign-out.mjs"
import { standardizeEmailAddress } from "./utils/standardize-email-address.mjs"
import { verifyOTP } from "./api/authn/verify-otp.mjs"
import { verifyPassword } from "./api/authn/verify-password.mjs"
import { write } from "./api/db/write.mjs"
import fs from "node:fs"
import path from "node:path"

class BaseExpressWebApp {
  authTokenCookieName = "authtoken"
  badRequestTimeout = 3000
  database = null // required
  emailValidator = null

  handlers = {
    authentication: {
      changePassword: null,
      deleteAccount: null,
      register: null,
      sendOTPEmail: null,
      signOut: null,
      verifyOTP: null,
      verifyPassword: null,
    },

    database: {
      read: null,
      write: null,
    },
  }

  logger = null
  mailer = null // required
  name = "Base Express App"
  otpLength = 8
  otpTTL = 5 * 60 * 1000
  password = randomString(256)
  passwordManager = null
  tokenTTL = 1000 * 60 * 60 * 24 // 24 hours

  constructor(config) {
    if (!config.database) {
      throw new Error(
        `This app requires a FileDB database (or other database with identical API)! The configuration object passed into the ${this.constructor.name} constructor must have a "database" property pointing to a FileDB database.`,
      )
    }

    if (!config.mailer) {
      throw new Error(
        `This app requires a Mailer instance! The configuration object passed into the ${this.constructor.name} constructor must have a "mailer" property pointing to a Mailer instance.`,
      )
    }

    this.authTokenCookieName =
      config.authTokenCookieName || this.authTokenCookieName

    this.badRequestTimeout = config.badRequestTimeout || this.badRequestTimeout
    this.database = config.database

    this.emailValidator =
      config.emailValidator || new EmailValidatorWithCaching(this.database)

    const helper = fn => {
      return (request, response) => {
        return fn(request, response, this)
      }
    }

    this.handlers = {
      authentication: {
        changePassword: helper(changePassword),
        deleteAccount: helper(deleteAccount),
        register: helper(register),
        sendOTPEmail: helper(sendOTPEmail),
        signOut: helper(signOut),
        verifyOTP: helper(verifyOTP),
        verifyPassword: helper(verifyPassword),
      },

      database: {
        read: helper(read),
        write: helper(write),
      },
    }

    this.logger =
      config.logger ||
      (() => {
        const logsDir = path.join(this.database.path, "logs")

        if (!fs.existsSync(logsDir)) {
          fs.mkdirSync(logsDir, { recursive: true })
        }

        return new Logger({ path: logsDir })
      })()

    this.mailer = config.mailer
    this.name = config.name || this.name
    this.otpLength = config.otpLength || this.otpLength
    this.otpTTL = config.otpTTL || this.otpTTL
    this.password = config.password || this.password

    this.passwordManager = new PasswordManager({
      db: this.database.fork("/password-manager"),
    })

    this.tokenTTL = config.tokenTTL || this.tokenTTL
  }

  // A request is authorized if it includes a valid JSON Web Token (JWT) in the
  // "authtoken" cookie (or whatever is the value of `this.
  // authTokenCookieName`). The token is valid if its signature is correct and
  // if it has not expired. (The token's expiration date should be a time in
  // milliseconds since the Unix epoch as the "exp" value on the token payload.)
  // Also, since all requests should include an email address in their body, it
  // probably wouldn't hurt to confirm that the email address in the token
  // payload's "email" property matches the email address in the request body.
  async requestIsAuthorized(request) {
    const token = await getRequestCookie(request, this.authTokenCookieName)

    if (!token || !tokenIsValid(token, this.password)) {
      return false
    }

    const payload = decodeTokenPayload(token)

    if (!payload.exp) {
      throw new Error("The token does not have an expiration date!")
    }

    if (new Date().getTime() - payload.exp > this.tokenTTL) {
      return false
    }

    const body = request.body || (await getRequestBody(request))

    if (
      standardizeEmailAddress(payload.email) !==
      standardizeEmailAddress(body.email)
    ) {
      return false
    }

    return true
  }
}

export { BaseExpressWebApp }
