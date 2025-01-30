import axios from 'axios';
import MovieModel from '../Models/MovieModel.js'
class MovieController {
    static async getPage(page) {
        try {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWMwMzdkM2YyZWFlYmU5NTdjYzZmMThjMWIzMjQ3YSIsIm5iZiI6MTczNzQxMTUwMi4wMzYsInN1YiI6IjY3OGVjYmFlZTQ1NjYzOTlhMjZlM2RhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r3cvIJiHqPghxPt0pVhmbJ1PBrwY1nrJmQEr2v5pJYg'
                }
            };
            const response = await axios(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`, options)
            console.log(response);
            return response.data.results.map(movie =>
                new MovieModel(movie.id, movie.title, movie.poster_path, movie.vote_average, movie.overview, movie.release_date)
            )
        } catch (err) {
            console.log("Error", err);
        }
    }
}
export default MovieController;