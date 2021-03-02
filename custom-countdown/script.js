const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');
const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// set date input min with today date

const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

// populate UI
function updateDOM() {
  const now = new Date().getTime();
  const distance = countdownValue - now;

  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / second);

  // populate countdown
  countdownElTitle.textContent = `${countdownTitle}`;
  timeElements[0].textContent = `${days}`;
  timeElements[1].textContent = `${hours}`;
  timeElements[2].textContent = `${minutes}`;
  timeElements[3].textContent = `${seconds}`;

  // hide input
  inputContainer.hidden = true;
  countdownEl.hidden = false;
}

// take values from form input
function updateCountdown(event) {
  event.preventDefault();
  countdownTitle = event.target[0].value;
  countdownDate = event.target[1].value;
  countdownValue = new Date(countdownDate).getTime();
  console.log('countdown value', countdownValue);
  updateDOM();
}

// event listeners
countdownForm.addEventListener('submit', updateCountdown);
