const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// disable enable button
function toggleButton() {
  button.disabled = !button.disabled;
}

// passing our joke to voice RSS
function tellMeJoke(joke) {
  const jokeString = joke.trim().replace(/ /g, '%20');

  VoiceRSS.speech({
    key: '96e30a38ef1344a79d031c0f8d70bcd5',
    src: jokeString,
    hl: 'en-us',
    v: 'Linda',
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false,
  });
}

// Get Jokes from JOKE API
async function getJokes() {
  let joke = '';

  try {
    const response = await fetch('https://v2.jokeapi.dev/joke/Programming');
    const data = await response.json();
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }

    // text to speech
    tellMeJoke(joke);

    // disable button
    toggleButton();
  } catch (error) {
    console.log('uppps ... this is no joke, you have an error:', error.message);
  }
}

button.addEventListener('click', getJokes);
audio.addEventListener('ended', toggleButton);
