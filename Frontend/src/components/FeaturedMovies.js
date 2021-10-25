import React, {Component} from 'react';
import { MovieContext } from '../MovieContext';
import Loading from './Loading';
import Movie from './Movie';
import Title from './Title';

export default class FeaturedMovies extends Component{
    static contextType = MovieContext;
    render(){
        let {loading, movies} = this.context;
        var featuredMovies = movies.slice(0,3) 
        featuredMovies = featuredMovies.map(movie  => {
            return <Movie key={movie.id} movie={movie}/>
        });

        return (
            <section className="featured-movies">
                <Title title="Filmhighlights" />
                <div className="featured-movies-center">
                    {loading ? <Loading/> : featuredMovies}
                </div>
            </section>
        );
    }
}