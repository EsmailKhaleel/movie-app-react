class MovieModel {
    constructor(id, title, poster_path, vote_average, overview, release_date) {
        this.id = id;
        this.title = title;
        this.poster_path = poster_path;
        this.vote_average = vote_average;
        this.overview = overview;
        this.release_date = release_date;
    }
}


export default MovieModel;