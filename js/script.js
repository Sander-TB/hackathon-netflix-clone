const BASE_URL = "http://api.tvmaze.com/shows";
let cachedMovieArray = [];
let contentContainer = document.getElementById("contentContainer");

fetch(BASE_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    loadShows(json);
  })
  .catch(function(error) {
    console.dir(error);
  });

function loadShows(json) {
  const shows = json;
  console.dir(json);

  const container = document.querySelector(".box");
  let newHTML = "";

  for (let i = 0; i < shows.length; i++) {
    const showImage = shows[i].image.medium;

    const details = `<img class="image" src=${showImage} alt="Show name">`;

    newHTML += details;
  }
  container.innerHTML = newHTML;
}
