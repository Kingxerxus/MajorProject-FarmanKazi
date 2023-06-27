// DOM elements
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

// Add event listener to the form on submit
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Clear previous error messages
  clearErrors();

  // Validate form inputs
  const isValidName = validateName();
  const isValidEmail = validateEmail();
  const isValidPhone = validatePhone();
  const isValidPassword = validatePassword();
  const doPasswordsMatch = validatePasswordMatch();

  // If all validations pass, submit the form
  if (isValidName && isValidEmail && isValidPhone && isValidPassword && doPasswordsMatch) {
    alert('Form submitted successfully!');
    form.reset();
  }
});

// Add event listeners to the form inputs on change
nameInput.addEventListener('change', validateName);
emailInput.addEventListener('change', validateEmail);
phoneInput.addEventListener('change', validatePhone);
passwordInput.addEventListener('change', validatePassword);
confirmPasswordInput.addEventListener('change', validatePasswordMatch);

// Validate Name
function validateName() {
  const name = nameInput.value.trim();
  if (name.length < 5) {
    showError('nameError', 'Name must be at least 5 characters');
    return false;
  }
  return true;
}

// Validate Email
function validateEmail() {
  const email = emailInput.value.trim();
  if (!email.includes('@')) {
    showError('emailError', 'Enter a valid email address');
    return false;
  }
  return true;
}

// Validate Phone
function validatePhone() {
  const phone = phoneInput.value.trim();
  if (phone === '123456789' || phone.length !== 10 || isNaN(phone)) {
    showError('phoneError', 'Enter a valid 10-digit phone number');
    return false;
  }
  return true;
}

// Validate Password
function validatePassword() {
  const password = passwordInput.value;
  const username = nameInput.value.trim();
  if (
    password.length < 8 ||
    password === 'PASSWORD' ||
    password.toLowerCase() === 'password' ||
    password.toLowerCase() === username.toLowerCase()
  ) {
    showError('passwordError', `Password must be at least 8 characters and shouldn't be weak`);
    return false;
  }
  return true;
}

// Validate Password Match
function validatePasswordMatch() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  if (password !== confirmPassword) {
    showError('confirmPasswordError', 'Passwords do not match');
    return false;
  }
  return true;
}

// Display error message
function showError(id, message) {
  const errorElement = document.getElementById(id);
  errorElement.textContent = message;
}

// Clear error messages
function clearErrors() {
  const errorElements = document.getElementsByClassName('error');
  for (let i = 0; i < errorElements.length; i++) {
    errorElements[i].textContent = '';
  }
}