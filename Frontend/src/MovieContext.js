import React, { Component } from 'react';
import axios from 'axios';

const MovieContext = React.createContext();

class MovieProvider extends Component{

    constructor(props){
        super(props)
    this.state={
        movies: [],
        sortedMovies: [],
        featuredMovies: [],
        loading: true,
        genre: 'Alle',
        free_seats: 0,
        minSeats: 0,
        maxSeats: 0,
        duration: 0,
        minDuration: 0,
        maxDuration: 0,
        menu: false,
        night_event: false
    }
    };

    componentDidMount(){
        axios.get('http://5.45.107.109:4000/api/moviedata')
        .then((response) => {
            let movies = this.formatData(response.data);
            let featuredMovies = movies.filter(movie => movie.featured === true);
            let maxSeats = Math.max(...movies.map(item => item.free_seats));
            let maxDuration = Math.max(...movies.map(item => item.duration));
            this.setState({ 
                movies,
                featuredMovies, 
                sortedMovies: movies,
                loading: false,
                free_seats: maxSeats,
                maxSeats,
                duration: maxDuration,
                maxDuration,
            })
        });
     };

    formatData(items){
        let tempItems = items.map(item  =>{
        let id = item.movieId;
        let movie = {...item, id};
        return movie;
    });
    return tempItems;
    };
     
    getMovie = domain =>{
        let tempMovies = [...this.state.movies];
        const movie = tempMovies.find(movie => movie.domain === domain);
        return movie;
    };

    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;
        this.setState({[name]: value}, this.filterMovies);
    };

    filterMovies = () => {
        let{movies, genre, free_seats, duration, menu, night_event} = this.state;
        let tempMovies = [...movies];
        //transform value
        free_seats = parseInt(free_seats);
        duration = parseInt(duration);

        //filter by genre
        if(genre !== 'Alle'){
            tempMovies = tempMovies.filter(movie => movie.genre === genre);
        }

        //filter by Seats
        tempMovies = tempMovies.filter(movie => movie.free_seats <= free_seats);

        //filter by Duration
        tempMovies = tempMovies.filter(movie => movie.duration <= duration);

        //filter by menu
        if(menu){
            tempMovies = tempMovies.filter(movie => movie.menu === true);
        }
        //filter by night_event
        if(night_event){
            tempMovies = tempMovies.filter(movie => movie.night_event === true);
        }

        //change state
        this.setState({
            sortedMovies: tempMovies,
        });
    };

    render() {
        return (
            <MovieContext.Provider value={{...this.state, getMovie: this.getMovie, handleChange: this.handleChange}}>
                {this.props.children}
            </MovieContext.Provider>
        );
    };
}

const MovieConsumer = MovieContext.Consumer;

export function withMovieConsumer(Component){
    return function ConsumerWrapper(props){
        return <MovieConsumer>
            {value => <Component {...props}  context ={value} />}
        </MovieConsumer>
    }
}

export{MovieProvider, MovieConsumer, MovieContext};