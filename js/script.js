const BASE_URL = "http://api.tvmaze.com/shows";
let cachedMovieArray = [];
let contentContainer = document.querySelector("content-container");

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

  const container = document.querySelector(".content-container");
  let newHTML = "";

  for (let i = 0; i < shows.length; i++) {
    const showImage = shows[i].image.medium;
    const showName = shows[i].name;

    const details = `
                      <div class="card">
                      <h2">${showName}</h2">
                      <div class="card-image">
                        <img src="${showImage}" alt="${showName}">
                      </div>
                      <div class="content">
                        <button class="details-button"><a href="details.html" class="detailsBtn">View Details</a></button>
                      </div>
                    </div>`;

    newHTML += details;
  }
  container.innerHTML = newHTML;
}
