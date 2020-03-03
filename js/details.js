const urlParams = new URLSearchParams(document.location.search);
const id = urlParams.get(`id`);
const API_URL = `http://api.tvmaze.com/shows/${id}`;
const API_EPISODES = `http://api.tvmaze.com/shows/${id}/episodes`;
const API_SEASONS = `http://api.tvmaze.com/shows/${id}/seasons`;

fetch(API_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    renderDetails(json);
  })
  .catch(function(error) {
    console.log(error);
  });

fetch(API_EPISODES)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    renderEpisodes(json);
  })
  .catch(function(error) {
    console.log(error);
  });

fetch(API_SEASONS)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    renderSeasons(json);
  })
  .catch(function(error) {
    console.log(error);
  });

function renderDetails() {}

function renderEpisodes() {}

function renderSeasons() {}
