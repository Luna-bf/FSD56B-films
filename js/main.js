import TmdbApi from './TmdbApi.js';
//import {discoverMovies} from './TmdbApi.js';

const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODQ3NWNiM2IzZjUzMTg3ZWY2OGFlNTlhMTdjNTY4OSIsIm5iZiI6MTcyOTg1Nzg5My40ODc2MjQsInN1YiI6IjY3MWI4NzYxZmVmZDFlMDUxMDAwMTZiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mUWPn_1zBaHbVnszUMN8Tqg8J-BdSIG6-0QCmUu5DgU"
    }
};

fetch('https://api.themoviedb.org/3/discover/movie', options).then(response => response.json()).then(response => {
    response.results.forEach(results => {
        console.log(results.title);
        elements.firstPageMovies.innerHTML = results.title;
    });
});

const elements = {
    searchBtn: document.querySelector('#search-btn'),
    searchResults: document.querySelector('#search-results'),
    errorText: document.querySelector('#error-text'),
    firstPageMovies: document.querySelector('#front-page-movies')
};
