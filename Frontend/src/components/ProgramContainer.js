import React from 'react';
import MovieFilter from './MovieFilter';
import MovieList from './MovieList';
import {withMovieConsumer} from '../context';
import Loading from './Loading';

function ProgramContainer({context}){
    const {loading, sortedMovies, movies} = context;
    if(loading) {
        return <Loading />
    }

    return (
        <>
        <MovieList movies={sortedMovies}/>
        <MovieFilter movies={movies}/>
        </>
    );
}

export default withMovieConsumer(ProgramContainer);
