// NOTE: This function assumes that the address has already been validated by
// the email validator; so this function's purpose is merely to standardize the
// address.

// NOTE: According to OWASP, it is not recommended to modify or block sub-
// addresses (i.e., addresses that use "+tag").
// https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html#sub-addressing

function standardizeEmailAddress(email) {
  return email.toLowerCase().trim()
}

export { standardizeEmailAddress }
