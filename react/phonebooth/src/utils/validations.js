export const validateForm = form => {
  let isValid = true
  let errors = {}

  const { email, password, confirmPassword } = form

  if (email != null) {
    if (!email.length) {
      errors = { ...errors, email: 'Please enter email' }
      isValid = false
    }
    if (email && !validateEmail(email)) {
      errors = { ...errors, email: 'Please enter valid email' }
      isValid = false
    }
  }

  if (password != null) {
    if (!password.length) {
      errors.password = 'Password can not be empty'
      isValid = false
    }
    if (password.length && !validatePassword(password)) {
      errors.password = 'Password is not valid'
      isValid = false
    }
  }
  if (confirmPassword != null && !errors.password) {
    if (!confirmPassword.length) {
      errors.confirmPassword = 'Please enter confirm password'
      isValid = false
    }
    if (confirmPassword.length && password !== confirmPassword) {
      errors.confirmPassword = 'Enter correct password'
      isValid = false
    }
  }
  return {
    isValid,
    errors
  }
}

function validateEmail (mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true
  }
  return false
}

const validatePassword = password => {
  return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(password)
}
