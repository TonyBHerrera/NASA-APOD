// Nasa API

const apiKey = `DEMO_KEY`;
const count = 10;
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];

// get 10 images from nasa api
async function getNasaPictures() {
  try {
    const repsonse = await fetch(apiURL);
    resultsArray = await repsonse.json();
    console.log(resultsArray);
  } catch (error) {
    // catch error here
    console.log("not working bruv");
  }
}
// on load
getNasaPictures();
