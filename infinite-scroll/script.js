const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photos = [];
let ready = false;
let totalImages = 0;
let imagesLoaded = 0;

const count = 30;
// replace this with your working unsplash api kei
const API_KEY = 'UNSPLASH_API_KEY';

const API_URL = `https://api.unsplash.com/photos/random/?count=${count}&client_id=${API_KEY}`;

function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
}

// helper function to set attributes to document
function setAttributes(element, attributes) {
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// create elements for links and photos and add them to the document
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photos.length;
  photos.forEach((photo) => {
    // create an <a> to link back to unsplash
    const item = document.createElement('a');
    // item.setAttribute('href', photo.links.html);
    // item.setAttribute('target', '_blank');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });

    // create image for photo
    const img = document.createElement('img');
    // img.setAttribute('src', photo.urls.regular);
    // img.setAttribute('alt', photo.alt_description);
    // img.setAttribute('title', photo.alt_description);
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    // check if eache image is fully loaded
    img.addEventListener('load', imageLoaded);

    // put image inside the <a>, then put both inside imageContainer
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// get photos form API
async function getPhotos() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    photos = [...data];
    displayPhotos();
  } catch (error) {
    console.log('Unable to fetch data', error);
  }
}

// check to see if scrolling near bottom of the page
window.addEventListener('scroll', () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

getPhotos();
