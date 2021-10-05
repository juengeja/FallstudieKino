import React, {Component} from 'react'
import BookMySeats from '../components/BookMySeats';
import Hero from '../components/Hero';
import Banner from '../components/Banner';

export default class Booking extends Component {
    constructor(props){
        super(props);

        this.state = {
          
        };
    }

    render() {
        return (
            <>
            <Hero hero = 'programHero'>
                <Banner title="Filmname">
                </Banner>
            </Hero>

            <div className="movie-extras">
            <h6>Vorführungsdatum</h6>
                
                <BookMySeats/>

                <button type="submit" class="btn-primary">Zum Warenkorb hinzufügen</button>
            </div>
            </> 
        );
    }
}
