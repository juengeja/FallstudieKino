import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import { MovieContext } from '../context';
import Title from '../components/Title';

export default class SingleMovie extends Component {
    constructor(props){
        super(props);
        //console.log(this.props);
        this.state = {
            domain: this.props.match.params.domain,
            defaultBcg
        };
    }
    static contextType = MovieContext;
    //componentDidMount(){}
    render() {
        const {getMovie} = this.context;
        const movie = getMovie(this.state.domain);
        if(!movie){
            return <div className="error">
                <h3>Der Film konnte nicht gefunden werden</h3>
                <Link to='/program' className="btn-primary">
                    Zurück zum Programm
                </Link>
            </div>
        }
        const {name,description,free_seats,release_date,duration,extras,menu,night_event,trailer,images} = movie;
        return (
            <>
        <Hero hero = 'programHero'>
            <Banner title={`${name}`}>
                <Link to='/program' className="btn-primary">
                    Zurück zum Programm
                </Link>
            </Banner>
        </Hero>
            <section className="single-movie">             
                <div class="single-movie-info">
                    <img src={images[0]} alt={name} className="single-movie-cover-image"/>
                    <article className="info">
                        <h3>Infos</h3>
                        <h6>Länge : {duration}min</h6>
                        <h6>Erscheinungsdatum : {release_date}</h6>
                        <h6>Freie Plätze : {free_seats}</h6>
                        <h6>{night_event ? "Diesen Film gibt es auch als Nachtvorstellung" : "Diesen Film gibt es nicht als Nachtvorstellung"}</h6>
                        <h6>{menu ? "Für diesen Film existiert ein spezielles Menü" : "Für diesen Film existiert kein spezielles Menü"}</h6>
                        <Link to='/booking' className="btn-primary">
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
                <h6>Extras</h6>
                <ul className="extras">
                    {extras.map((item, index) =>{
                        return <li key={index}>- {item}</li>
                    })}
                </ul>
            </section>

            <section className="movie-extras"> 
                <Title title="Trailer" />
                <iframe className="single-movie-trailer" src={trailer} title="Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
            </section>
            </>
        );
    }
}