import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import { MovieContext } from '../MovieContext';
import Title from '../components/Title';

export default class SingleMovie extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
        };
    }
    static contextType = MovieContext;
    //componentDidMount(){}
    render() {
        const {getMovie} = this.context;
        const movie = getMovie(this.state.slug);
        if(!movie){
            return <div className="error">
                <h3>Der Film konnte nicht gefunden werden</h3>
                <Link to='/program' className="btn-primary">
                    Zurück zum Programm
                </Link>
            </div>
        }
        const {movieName, mainGenre, producer, director,description,duration,trailer,img} = movie;
        return (
            <>
        <Hero hero = 'programHero'>
            <Banner title={`${movieName}`}>
                <Link to='/program' className="btn-primary">
                    Zurück zum Programm
                </Link>
            </Banner>
        </Hero>
            <section className="single-movie">             
                <div class="single-movie-info">
                    <img src={img} alt={movieName} className="single-movie-cover-image"/>
                    <article className="info">
                        <h3>Infos</h3>
                        <h6>Länge : {duration}min</h6>
                        <h6>Genre : {mainGenre}</h6>
                        <h6>Produzent : {producer}</h6>
                        <h6>Regisseur : {director}</h6>
                        <Link to={`/addToShoppingCart/${this.state.slug}`} className="btn-primary">
                            Buchen
                        </Link>
                    </article>
                </div>
            </section>
            <section className="movie-extras">             
                    <article className="desc">
                        <h3>Beschreibung</h3>
                        <p>{description}</p>
                    </article>
            </section>
            <section className="movie-extras"> 
                <Title title="Trailer" />
                <iframe className="single-movie-trailer" src={trailer} title="Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
            </section>
            </>
        );
    }
}