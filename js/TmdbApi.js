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
    
    //récupère les films et en affiche 20 dans la liste
    discoverMovies() {
        
        elements.searchBtn.addEventListener('submit', (e) => {
            e.preventDefault();
        
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
                
            fetch(`https://www.themoviedb.org/search/movie`, options).then(response => response.json()).then(response => {
                if(response.features.length == 0) {
                    throw new Error("0 movies found")
                }
                    
                return response.features[0].properties.label;
            });
        });
    };
}

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODQ3NWNiM2IzZjUzMTg3ZWY2OGFlNTlhMTdjNTY4OSIsIm5iZiI6MTcyOTg1Nzg5My40ODc2MjQsInN1YiI6IjY3MWI4NzYxZmVmZDFlMDUxMDAwMTZiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mUWPn_1zBaHbVnszUMN8Tqg8J-BdSIG6-0QCmUu5DgU";
const api = new TmdbApi("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODQ3NWNiM2IzZjUzMTg3ZWY2OGFlNTlhMTdjNTY4OSIsIm5iZiI6MTcyOTg1Nzg5My40ODc2MjQsInN1YiI6IjY3MWI4NzYxZmVmZDFlMDUxMDAwMTZiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mUWPn_1zBaHbVnszUMN8Tqg8J-BdSIG6-0QCmUu5DgU");

export default TmdbApi;
