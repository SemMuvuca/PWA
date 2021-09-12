function isValidEmail (email) {
  const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
  return emailPattern.test(email) || 'email inválido';
}

function isPasswordValid (password) {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
  return passwordPattern.test(password) || 'Mínimo uma letra maiúscula, minuscula, caractere especial e 8 dígitos';
}

function isCPFValid (password) {
  const CpfPattern = /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
  return CpfPattern.test(password) || 'CPF inválido';
}

function isTelephoneValid (telephone) {
  const telephonePattern = /^(?:\()[0-9]{2}(?:\))\s(?:9)?[0-9]{4,5}(?:-)[0-9]{3,4}$/;
  return telephonePattern.test(telephone) || 'núm inválido';
}

export {
  isValidEmail,
  isPasswordValid,
  isCPFValid,
  isTelephoneValid
}
