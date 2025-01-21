import * as React from 'react';
// import Button from '@mui/material/Button';
const MovieItem = function ({movie}) {
    return (
    <div className="card">
    <div className="card-background">
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Background" />
    </div>
    <div className="card-content">
      <h2 className="title">{movie.title}</h2>
      <p className='overview'>{movie.overview}</p>
      <div className="rating">
        <span>★</span><span>★</span><span>★</span><span>★</span><span className="half-star">☆</span>
      </div>
      <p className="details">6 Ep <span className="genre">Superhero</span></p>
      <div className="buttons">
        <button className="add-btn">+</button>
        <button className="info-btn">More info</button>
      </div>
    </div>
  </div>
  
    );
}
export default MovieItem;