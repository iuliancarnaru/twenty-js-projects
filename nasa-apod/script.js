// NASA API
const count = 10;
const apiKEY = 'DEMO_KEY';
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKEY}&count=${count}`;

let resultsArray = [];

// get 10 images from NASA api
async function getNasaPictures() {
  try {
    const response = await fetch(apiURL);
    resultsArray = await response.json();
    console.log(resultsArray);
  } catch (error) {
    console.error(error);
  }
}

// on load
getNasaPictures();
