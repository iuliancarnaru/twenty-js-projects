const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select media stream, pass to video element and play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log('woops something went wrong...', error);
  }
}

button.addEventListener('click', async () => {
  // disable button
  button.disabled = true;

  // start picture in picture
  await videoElement.requestPictureInPicture();

  // reset button
  button.disabled = false;
});

// on page load
selectMediaStream();
