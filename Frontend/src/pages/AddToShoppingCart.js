import React, {Component} from 'react'
import BookMySeats from '../components/BookMySeats';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { MovieContext } from '../context';
import axios from 'axios';

export default class Booking extends Component {
    constructor(props){
        super(props);

        this.state = {
            slug: this.props.match.params.slug,
            movie_events: [],
            events_for_selected_movie: [],
        };
    }


    componentDidMount(){
        axios.get('http://5.45.107.109:4000/api/movieevents')
        .then((response) => {
            let movie_events = this.formatData(response.data);
            this.setState({ 
                movie_events,
                events_for_selected_movie: movie_events,
            })
        });
     };

    formatData(items){
        let tempItems = items.map(item  =>{
        let event = {...item};
        return event;
    });
    return tempItems;
    };

    getEventforMovie = movieName =>{
        let tempMovies = [...this.state.movie_events];
        let events = tempMovies.find(events => events.movieName === movieName);
        return events
    };

    static contextType = MovieContext;

    render() {
        const {getMovie} = this.context;
        const movie = getMovie(this.state.slug);

        if(!movie){
            return (
            <div className="error">
                <h3>Ein Fehler ist aufgetreten</h3>
            </div>
            );
        }
        
        const {name, presentation_date} = movie;
        let events_for_selected_movie = this.getEventforMovie({name});

        /*
        if (!this.state.events_for_selected_movie.length){
            return (
                <div className="error">
                    <h3>Keine Vorstellungen zu diesem Film gefunden</h3>
                </div>
                );
        }
        */

        return (
            <>
            <Hero hero = 'programHero'>
                <Banner title={name}>
                </Banner>
            </Hero>

            <div className="movie-extras">
            <h6>Vorführungsdatum</h6>
            {/*}
                {events_for_selected_movie.map((item, index) =>{
                    return <li key={index}>- {item}</li>
                })}
            */}
            
                {presentation_date.map((item, index) =>{
                    return <li key={index}>- {item}</li>
                })}

                <BookMySeats/>

                <button type="submit" class="btn-primary">Zum Warenkorb hinzufügen</button>
            </div>
            </> 
        );
    }
}
