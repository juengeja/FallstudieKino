import React, { Component } from 'react';
import items from './data';

const MovieContext = React.createContext();
// <MovieContext.Provider value={'hello'}

class MovieProvider extends Component{
    state={
        movies: [],
        sortedMovies: [],
        featuredMovies: [],
        loading: true,
        genre: 'all',
        minSeats: 0,
        maxSeats: 0,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };
    // getData

    componentDidMount(){
        // this.getData
        let movies = this.formatData(items);
        let featuredMovies = movies.filter(movie => movie.featured === true);
        let maxSeats = Math.max(...movies.map(item => item.free_seats));
        let maxPrice = Math.max(...movies.map(item => item.price));
        let maxSize = Math.max(...movies.map(item => item.size));
        this.setState({
            movies,
            featuredMovies, 
            sortedMovies: movies,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
        });
    }

    formatData(items){
            let tempItems = items.map(item  =>{
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let movie = {...item.fields, images, id};
            return movie;
        });
        return tempItems;
    };

    getMovie = (slug) =>{
        let tempMovies = [...this.state.movies];
        const movie = tempMovies.find((movie)=>movie.slug === slug);
        return movie;
    };

    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;
        this.setState({[name]: value}, this.filterMovies);
    };

    filterMovies = () => {
        let{movies, genre, capacity, price, minSize, maxSize, breakfast, pets} = this.state;
        let tempMovies = [...movies];
        //transform value
        capacity = parseInt(capacity);
        price = parseInt(price);

        //filter by genre
        if(genre !== 'all'){
            tempMovies = tempMovies.filter(movie => movie.genre === genre);
        }

        //filter by capacity
        if(capacity !== 1){
            tempMovies = tempMovies.filter(movie => movie.capacity >= capacity);
        }

        //filter by price
        tempMovies = tempMovies.filter(movie => movie.price <= price);

        //filter by size
        tempMovies = tempMovies.filter(movie => movie.size >= minSize && movie.size <= maxSize);

        //filter by breakfast
        if(breakfast){
            tempMovies = tempMovies.filter(movie => movie.breakfast === true);
        }
        //filter by pets
        if(pets){
            tempMovies = tempMovies.filter(movie => movie.pets === true);
        }

        //change state
        this.setState({
            sortedMovies: tempMovies
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