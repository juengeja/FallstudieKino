import axios from 'axios';
import React, {Component} from 'react'
import BookMySeats from '../components/BookMySeats';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { MovieContext } from '../context';

export default class Booking extends Component {
    constructor(props){
        super(props);

        this.state = {
            slug: this.props.match.params.slug,           
            id: '',
            fist_name: '',
            last_name:  '',
        };
    }

    handleChange =(e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit =(e) => {
        e.preventDefault()
        axios.post('http://5.45.107.109:4000/api/booking', this.state)
        .then(response =>{
            console.log(response)
        })
    }

    static contextType = MovieContext;

    render() {
        const {bookingId, fistName, lastName, slug} = this.state;
        const {getMovie} = this.context;
        const movie = getMovie(slug);
        if(!movie){
            return <div className="error">
                <h3>Die Filmdaten konnten nicht geladen werden</h3>
            </div>
        }
        const {name, presentation_date} = movie;
        return (
            <>
            <Hero hero = 'programHero'>
                <Banner title={`${name}`}>
                </Banner>
            </Hero>

            <div className="movie-extras">
            <h6>Vorführungsdatum</h6>
                <ul className="extras">
                    {presentation_date.map((item, index) =>{
                        return <li key={index}> <button class="btn-primary">{item}</button></li>
                    })}
                </ul>

                <BookMySeats/>
            </div>

            
            <div className="movie-extras">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Buchungs ID</label>
                        <input type="text" name="id" value={bookingId} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Vorname</label>
                        <input type="text" name="fist_name" value={fistName} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Nachname</label>
                        <input type="text" name="last_name" value={lastName} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <button type="submit">Abschicken</button>
                    </div>
                </form>
            </div> 
            </> 
        );
    }
}
