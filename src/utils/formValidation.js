export function checkEmailErrors(emailInput, setEmailError) {
  if (emailInput.validity.valueMissing) return setEmailError("Can't be empty");
  if (emailInput.validity.typeMismatch || !/\.[a-zA-Z]+$/.test(emailInput.value)) return setEmailError("Incorrect format");
  setEmailError("");
}

export function checkPasswordErrors(passwordInput, setPasswordError) {
  if (passwordInput.validity.valueMissing) return setPasswordError("Can't be empty");
  if (passwordInput.validity.tooShort) return setPasswordError("Too short");
  if (passwordInput.value.length > 24) {
    passwordInput.setCustomValidity("Too long");
    return setPasswordError("Too long");
  }
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).+$/.test(passwordInput.value)) {
    passwordInput.setCustomValidity("Incorrect format");
    return setPasswordError("Incorrect format");
  }
  setPasswordError("");
  passwordInput.setCustomValidity("");
}

export function checkConfirmPasswordError(confirmPasswordInput, setConfirmPasswordError, hasPasswordError) {
  if (hasPasswordError) return setConfirmPasswordError("");

  const input = confirmPasswordInput;
  console.log(input.validity);
  console.log(input.validity.valueMissing);

  if (input.validity.valueMissing) return setConfirmPasswordError("Can't be empty");
  if (input.validity.patternMismatch) return setConfirmPasswordError("Should match password");
  setConfirmPasswordError("");
}
