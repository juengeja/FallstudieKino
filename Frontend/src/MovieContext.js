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
        duration: 0,
        minDuration: 0,
        maxDuration: 0,
    }
    };

    componentDidMount(){
        axios.get('http://5.45.107.109:4000/api/moviedata')
        .then((response) => {
            let movies = this.formatData(response.data);
            let featuredMovies = movies.filter(movie => movie.featured === true);
            let maxDuration = Math.max(...movies.map(item => item.duration));
            this.setState({ 
                movies,
                featuredMovies, 
                sortedMovies: movies,
                loading: false,
                duration: maxDuration,
                maxDuration,
            })
        });
     };

    formatData(items){
        let tempItems = items.map(item  =>{
        let id = item.movieId;
        let domain = item.movieName;
        let movie = {...item, domain, id};
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
        const name = target.name;
        this.setState({[name]: value}, this.filterMovies);
    };

    filterMovies = () => {
        let{movies, mainGenre, duration, movieName} = this.state;
        let tempMovies = [...movies];
        //transform value
        duration = parseInt(duration);
/*
        //filter by name
        tempMovies = tempMovies.filter(movie => movie.movieName.includes(movieName));
*/
        //filter by genre
        if(mainGenre !== 'Alle'){
            tempMovies = tempMovies.filter(movie => movie.mainGenre === mainGenre);
        }
        
        //filter by Duration
        tempMovies = tempMovies.filter(movie => movie.duration <= duration);

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