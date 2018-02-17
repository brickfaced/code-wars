function validatePIN (pin) {
  let res = /^(\d{4})(\d{2})?$/.test(pin)
  return res
}