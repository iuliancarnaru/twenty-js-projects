const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
  if (!loader.hidden) {
    loader.hidden = true;
    quoteContainer.hidden = false;
  }
}

// get quote from API
// async function getQuote() {
//   showLoadingSpinner();
//   const proxyUrl = 'https://jacinto-cors-proxy.herokuapp.com/';
//   const apiUrl =
//     'http://api.forismatic.com/api/1.0/method=getQuote&lang=en&format=json';

//   try {
//     const response = await fetch(proxyUrl + apiUrl);
//     const data = await response.json();

//     // if the author is blank, add 'Unknown'
//     if (data.quoteAuthor === '') {
//       authorText.innerText = 'Unknown';
//     } else {
//       authorText.innerText = data.quoteAuthor;
//     }

//     // reduce font size for long quotes
//     if (data.quoteText.length > 120) {
//       quoteText.classList.add('long-quote');
//     } else {
//       quoteText.classList.remove('long-text');
//     }
//     quoteText.innerText = data.quoteText;

//     // stop loader, show quote
//     removeLoadingSpinner();
//   } catch (error) {
//     getQuote();
//     console.error('Woops no quote... :(', error.message);
//   }
// }

const localQuotes = [
  {
    text:
      'Genius is one percent inspiration and ninety-nine percent perspiration.',
    author: 'Thomas Edison',
  },
  {
    text: 'You can observe a lot just by watching.',
    author: 'Yogi Berra',
  },
  {
    text: 'A house divided against itself cannot stand.',
    author: 'Abraham Lincoln',
  },
  {
    text: 'Difficulties increase the nearer we get to the goal.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    text: 'Fate is in your hands and no one elses',
    author: 'Byron Pulsifer',
  },
];

function getQuoteFromObject() {
  showLoadingSpinner();
  // Pick a random quote from array
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  console.log(quote);
  // Check if Author field is blank and replace it with 'Unknown'
  if (!quote.author) {
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = quote.author;
  }
  // Check Quote length to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
  // Set Quote, Hide Loader
  quoteText.textContent = quote.text;
  removeLoadingSpinner();
}

// tweet quote
function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
}

// event listeners
newQuoteBtn.addEventListener('click', getQuoteFromObject);
twitterBtn.addEventListener('click', tweetQuote);

// on page load
// getQuote();
getQuoteFromObject();
