import axios from "axios";

const API_KEY = 'b33da3ce690a190d19a4a4748ce296eb';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;


export class MoviesService {
    
    static getMovies() {
        return axios(withBaseUrl('movie/popular'));
    }
    
    static getMovieById(id) {
        return axios(withBaseUrl(`movie/${id}`));
    } 
}