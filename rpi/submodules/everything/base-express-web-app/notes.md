# JWTs

[source](https://jwt.io/introduction)

- **quick summary**
  - consists of 3 parts separated by periods:
    - _header_ = an object that usually has two properties: the algorithm used (e.g., "HS256", meaning SHA-256), and the type of token (usually "JWT")
    - _payload_ = any data
    - _signature_ = the HMAC hash of `${header}.${payload}` using a _secret_ known only by the sender
  - the signature can be used to verify the _integrity_ of the data in the header and payload
  - since the data is only encoded (and can therefore be decoded), it should _not_ include any sensitive data — unless it's also subsequently encrypted!

- general
  - can be signed using a secret (w/ hmac) or a public / private key pair (w/ rsa or ecdsa)
    - "Signed tokens can verify the _integrity_ of the claims contained within it... When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it."
  - can also be encrypted (optional)
- structure
  - three parts separated by dots (`xxxxx.yyyyy.zzzzz`):
    - header
    - payload
    - signature
  - **header**
    - usually has at least these two properties:
      - `alg` = type of algorithm being used (e.g., `"HS256"` (HMAC SHA-256))
      - `typ` = the type of token (e.g., `"JWT"`)
    - then, as json, the header is base64-url-encoded to form the first part of the token string (i.e., the `xxxxx` part of `xxxxx.yyyyy.zzzzz`)
  - **payload**
    - contains _claims_, which come in 3 types: registered, public, or private ("Claims are statements about an entity (typically, the user) and additional data.")
  - **signature**
    - "take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that": (e.g.) `HMACSHA256( base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)`

# Misc

- QUESTION: Is it important for the front-end to confirm that the server was the one that sent a JWT? (This would require using public/private key pairs rather than simple passwords in the JWT creation process.)
- QUESTION: Could I send JWTs in magic links rather than storing OTPs to the database? This would make the magic links stateless, if it's possible (and safe, of course)... 🤔
  - ANSWER: No, I don't think so, since choosing to store _zero_ information in the database opens up the possibility of spamming the endpoint and sending an arbitrary number of emails rather than applying a cool-down period.
- As of 2023-10-28, I've removed all E2EE stuff from this app template! I just felt that it was too overwhelming, too error-prone, and too slow. And I'm not confident that I'll ever actually need it — though if I do, I should use apps built by security professionals.

# Testing

**NOTE:** Remember to use `source ./.env` to set the Node environment variable(s) related to SSL certs _before_ running any tests! (This is already done automatically in the `test.sh` file, but it's good to know how to do it manually if necessary.)

# Thoughts from LLMs

## 2025-06-23

**ChatGPT:**

```
The security of using cookies versus an "Authorization" header for sending authentication or authorization information from a browser depends on several factors, including the specific use case, implementation, and security measures in place. Here are some considerations for both methods:

### Cookies

**Advantages:**

1. **Automatic Handling**: Browsers automatically include cookies in requests to the same origin, making it easier to manage sessions without additional code.
2. **HttpOnly and Secure Flags**: Cookies can be marked as HttpOnly (not accessible via JavaScript) and Secure (only sent over HTTPS), which helps protect against certain attacks like XSS (Cross-Site Scripting) and eavesdropping.

**Disadvantages:**

1. **CSRF Vulnerability**: Cookies are susceptible to Cross-Site Request Forgery (CSRF) attacks unless additional protections (like SameSite attributes) are implemented.
2. **Session Management**: If a cookie is stolen, an attacker can impersonate the user until the session expires or the cookie is invalidated.

### Authorization Header

**Advantages:**

1. **Explicit Control**: Using an "Authorization" header allows for more explicit control over when and how tokens are sent, which can reduce the risk of CSRF.
2. **Statelessness**: Tokens (like JWTs) can be stateless, allowing for easier scaling and management of sessions without server-side storage.

**Disadvantages:**

1. **Manual Management**: Developers need to manage the inclusion of the token in requests, which can lead to mistakes if not handled properly.
2. **Exposure in JavaScript**: If tokens are stored in local storage or session storage, they can be accessed by JavaScript, making them vulnerable to XSS attacks.

### Conclusion

- **Use Cookies**: If you can implement proper security measures (like HttpOnly, Secure, and SameSite attributes) and are concerned about CSRF, cookies can be a secure option.
- **Use Authorization Headers**: If you need more control over the authentication process and are implementing a stateless API, using an "Authorization" header can be more secure, especially if you can mitigate XSS risks.

Ultimately, the choice between cookies and authorization headers should be based on the specific security requirements of your application, the potential threats, and the implementation of security best practices.
```

**Claude:**

```
In general, it is more secure to include authentication/authorization information via an "Authorization" header rather than using cookies.

Here's why:

1. **Cross-Site Scripting (XSS) Vulnerability**: Cookies are stored in the browser and can be accessed by client-side scripts, including malicious scripts injected through an XSS vulnerability. If an attacker gains access to the cookie, they can use the authentication/authorization information to impersonate the user. In contrast, the "Authorization" header is not accessible to client-side scripts, making it less vulnerable to XSS attacks.

2. **Cross-Site Request Forgery (CSRF) Vulnerability**: Cookies are automatically sent with every request, including those initiated by a malicious website. This makes them vulnerable to CSRF attacks, where an attacker can trick the user into performing unwanted actions. The "Authorization" header, on the other hand, is not automatically included in cross-origin requests, reducing the risk of CSRF attacks.

3. **Scope of Exposure**: Cookies are typically sent with every request, even to unrelated domains. This means that if the cookie is compromised, the attacker can use it to access any resource that accepts the cookie. The "Authorization" header, however, is only sent to the intended server, limiting the scope of exposure if the token is compromised.

4. **Statelessness**: Token-based authentication using the "Authorization" header is more stateless, as the server does not need to maintain a session for the client. This can simplify the server-side implementation and improve scalability.

That being said, there are some cases where using cookies can be appropriate, such as when the authentication/authorization information is not sensitive (e.g., a session ID) or when the application requires the use of cookies for other functionality (e.g., storing user preferences).

In general, the best practice is to use the "Authorization" header for sensitive authentication/authorization information and reserve the use of cookies for less sensitive data.
```
