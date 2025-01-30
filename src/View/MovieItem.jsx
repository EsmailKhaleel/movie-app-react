import * as React from 'react';
const MovieItem = function ({ movie }) {
  return (
    <div className="card">

      <div className="card-background">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Background" />
      </div>

      <div className="card-content">
        <h2 className="title">{movie.title}</h2>
        <p className='overview'>{movie.overview}</p>
        <div className="rating">Rating : {movie.vote_average.toFixed(1)}</div>
        <p className="details">Release : {movie.release_date}</p>
        <div className="buttons">
          <button className="add-btn">+</button>
          <button className="info-btn">More info</button>
        </div>
      </div>
      
    </div>
  );
}
export default MovieItem;