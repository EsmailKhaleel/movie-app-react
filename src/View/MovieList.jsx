import React, { useEffect, useState } from "react";
import MovieController from "../Controllers/MovieController"
import MovieItem from "./MovieItem";

export default function MovieList({ movies, setMovies }) {
    const [loading, setLoading] = useState('');
    const [error, setError] = useState('');


    const fetchMovies = async () => {
        try {
            const movies = await MovieController.getPage(1);
            setMovies(movies);
            setLoading(true);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Something went wrong</h1>
    }
    return (
        (
            <div id="movies-wrapper">
                {movies.map(movie => { return <MovieItem key={movie.id} movie={movie} /> })}
            </div>
        )
    )
}