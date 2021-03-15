const resultsNav = document.getElementById('resultsNav');
const favoritesNav = document.getElementById('favoritesNav');
const imagesContainer = document.querySelector('.images-container');
const saveConfirmed = document.querySelector('.save-confirmed');
const loader = document.querySelector('.loader');

// NASA API
const count = 10;
const apiKEY = 'DEMO_KEY';
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKEY}&count=${count}`;

let resultsArray = [];

function updateDOM() {
  resultsArray.forEach((result) => {
    // card container
    const card = document.createElement('div');
    card.classList.add('card');

    // link
    const link = document.createElement('a');
    link.href = result.hdurl;
    link.title = 'View full image';
    link.target = '_blank';
    link.setAttribute('rel', 'noopener noreferrer');

    // image
    const image = document.createElement('img');
    image.src = result.url;
    image.alt = 'NASA Picture of the Day';
    image.loading = 'lazy';
    image.classList.add('card-img-top');

    // card body
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    // card title
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = result.title;

    // save text
    const saveText = document.createElement('p');
    saveText.classList.add('clickable');
  });
}

// get 10 images from NASA api
async function getNasaPictures() {
  try {
    const response = await fetch(apiURL);
    resultsArray = await response.json();
    updateDOM();
  } catch (error) {
    console.error(error);
  }
}

// on load
getNasaPictures();
