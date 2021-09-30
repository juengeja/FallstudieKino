import React, { useState, useEffect } from 'react';

import MovieFilter from './MovieFilter';
import MovieList from './MovieList';
import {withMovieConsumer} from '../context';
import Loading from './Loading';
import api from '../api';

function ProgramContainer({context}){
    const {loading, sortedMovies, movies} = context;

    const [backendMovies, setBackendMovies] = useState([])
    
    useEffect(() => {
        api.get(`/movies/getAll`)
            .then(res => {
                setBackendMovies(res.data);
            })        
    }, [])

    useEffect(() => {
        console.log("Hui", backendMovies)
    }, [backendMovies])



    if(loading) {
        return <Loading />
    }

    return (
        <>
        <MovieFilter movies={movies}/>
        <MovieList movies={sortedMovies}/>
        </>
    );
}

export default withMovieConsumer(ProgramContainer);
