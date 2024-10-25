class TmdbApi {
    #token;
    
    constructor(token) {
        this.#token = token;
    }
    
    get token() {
        return this.#token;
    }
    
    set token(token) {
        this.#token = token;
    }
    
    
    discoverMovies() {
        
        /*fetch('https://api.themoviedb.org/3/discover/movie', options).then(response => response.json()).then(response => {
            response.results.forEach(results => {
                console.log(results.title);
                elements.firstPageMovies.innerHTML = results.title;
            });
        });*/
        
        searchMovies(elements.frontPageMovies).then(response => response.json()).then(response => {
                
                elements.frontPageMovies.innerHTML = response.results.map(results => {
                    return `<li>${results.title} + ${results.poster_path}</li>`
                }).join('');
            }).catch(error => {
                elements.errorText.textContent = error.message;
                elements.errorText.removeAttribute('hidden');
            });
        });
    };
    
    searchMovies() {
        elements.searchBtn.addEventListener('submit', (e) => {
            e.preventDefault();
        
            searchMovies(elements.searchResults).then(response => response.json()).then(response => {
                
                elements.searchResults.innerHTML = response.results.map(results => {
                    return `<li>${results.title}</li>`
                }).join('');
            }).catch(error => {
                elements.errorText.textContent = error.message;
                elements.errorText.removeAttribute('hidden');
            });
        });
    };
}

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODQ3NWNiM2IzZjUzMTg3ZWY2OGFlNTlhMTdjNTY4OSIsIm5iZiI6MTcyOTg1Nzg5My40ODc2MjQsInN1YiI6IjY3MWI4NzYxZmVmZDFlMDUxMDAwMTZiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mUWPn_1zBaHbVnszUMN8Tqg8J-BdSIG6-0QCmUu5DgU";
const api = new TmdbApi("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODQ3NWNiM2IzZjUzMTg3ZWY2OGFlNTlhMTdjNTY4OSIsIm5iZiI6MTcyOTg1Nzg5My40ODc2MjQsInN1YiI6IjY3MWI4NzYxZmVmZDFlMDUxMDAwMTZiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mUWPn_1zBaHbVnszUMN8Tqg8J-BdSIG6-0QCmUu5DgU");

export default TmdbApi;
