import React, {useState} from 'react';
import NavBar from './View/NavBar';
import MovieList from './View/MovieList';
import PaginationComponent from './View/PaginationComponent';

export default function App() {

    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

    // Handle search input changes
    const changeHandler = (searchWord) => {
        const lowerCaseSearchWord = searchWord.toLowerCase();
        const filtered = movies.filter((movie) =>
            movie.title.toLowerCase().includes(lowerCaseSearchWord)
        );
        setFilteredMovies(filtered);
    };
    
    return (
        <div>
            <NavBar onSearch={changeHandler}/>
            <MovieList  movies={filteredMovies.length > 0 ? filteredMovies : movies} setMovies={setMovies}/>
            <PaginationComponent setMovies={setMovies}/>
        </div>
    )
}
