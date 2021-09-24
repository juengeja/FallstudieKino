import React, {Component, Copmonent} from 'react';
import { MovieContext } from '../context';
import Loading from './Loading';
import Movie from './Movie';
import Title from './Title';

export default class FeaturedMovies extends Component{
    static contextType = MovieContext;
    render(){
        let {loading, featuredMovies : movies} = this.context;
        movies = movies.map(movie  => {
            return <Movie key={movie.id} movie={movie}/>
        });

        return (
            <section className="featured-movies">
                <Title title="Filmhighlights" />
                <div className="featured-movies-center">
                    {loading ? <Loading/> : movies}
                </div>
            </section>
        );
    }
}