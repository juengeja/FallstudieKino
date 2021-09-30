import React from 'react';
import MovieFilter from './MovieFilter';
import MovieList from './MovieList';
import {withMovieConsumer} from '../context';
import Loading from './Loading';
import MovieRestComponent from './MovieRestComponent';

function ProgramContainer({context}){
    const {loading, sortedMovies, movies} = context;
    if(loading) {
        return <Loading />
    }

    return (
        <>
        <MovieFilter movies={movies}/>
        <MovieList movies={sortedMovies}/>
        <MovieRestComponent/>
        </>
    );
}

export default withMovieConsumer(ProgramContainer);
