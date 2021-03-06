const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // using CONSTRAINT API
  isValid = form.checkValidity();
  if (!isValid) {
    // style main message for an error
    message.textContent = 'Please fill out all the fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }

  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
  } else {
    passwordsMatch = false;
    message.textContent = 'Make sure passwords match.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
    return;
  }

  if (isValid && passwordsMatch) {
    message.textContent = 'Successfully registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  console.log(user);
}

function processFormData(event) {
  event.preventDefault();
  // validate form
  validateForm();
  // submit data if valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

// event listeners
form.addEventListener('submit', processFormData);
