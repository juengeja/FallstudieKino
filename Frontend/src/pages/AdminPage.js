import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { connect } from 'react-redux';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns'

class AdminPage extends Component{

    constructor(props) {
        super(props);

        this.state = {
            movies:[],
            selectedMovie: null,
            seatingTemplates:[],
            selectedTemplate: null,
            eventStart: [],
            selectedEventStart: new Date(),
            is3D: false,

            movieName: '',
            mainGenre: '',
            duration: '',
            trailer: '',
            actors: [],
            producer: '',
            director: '',
            img: '',
            description: ''
        }
    };

    componentDidMount() {
        axios.get('http://5.45.107.109:4000/api/moviedata')
            .then((response) => {
                let movies = this.formatData(response.data);
                this.setState({
                    movies,
                })
            });

        axios.get('http://5.45.107.109:4000/api/seatingTemplates')
            .then((response) => {
                let seatingTemplates = this.formatData(response.data);
                this.setState({
                    seatingTemplates,
                })
            });
    };

    formatData(items) {
        let tempItems = items.map(item => {
            let movie = { ...item};
            return movie;
        });
        return tempItems;
    };

    handleShowEventSubmit = event => {
        event.preventDefault();

        const showEvent_json  = {
            showEventId: this.state.selectedMovie.movieId + Date().toLocaleString('de-DE'),
            movieInfo: this.state.selectedMovie,
            seatingTemplateInfo: this.state.selectedTemplate,
            eventStart: this.state.eventStart,
            is3D: this.state.is3D
        }
    console.log(showEvent_json)


    axios.post('http://5.45.107.109:4000/api/createshowevent', showEvent_json)
    .then(res => {
        if (res.data != null) {
            if (res.data.bookingStatus === "") {
                alert('Erfolgreich hinzugefügt')
            } else {
                alert('Fehler')
            }
          } else {
            alert("Ein Fehler ist aufgetreten")
          }
      })
    }

    handleMovieSubmit = event => {
        event.preventDefault();

        const movie_json  = {
            movieId: this.state.movieName.replace(" ", ""),
            movieName: this.state.movieName,
            mainGenre: this.state.mainGenre,
            duration: this.state.duration,
            trailer: this.state.trailer,
            actors: this.state.actors,
            producer: this.state.producer,
            director: this.state.director,
            img: this.state.img,
            description: this.state.description
        }
    console.log(movie_json)

    axios.post('http://5.45.107.109:4000/api/createsmovie', movie_json)
    .then(res => {
        if (res.data != null) {
            if (res.data.bookingStatus === "") {
                alert('Erfolgreich hinzugefügt')
            } else {
                alert('Fehler')
            }
          } else {
            alert("Ein Fehler ist aufgetreten")
          }
      })
    }

    handleChange = (e) => {
        console.log(e.target.name)
        if (e.target.name === 'is3D'){
            this.setState({
                is3D: !this.state.is3D
            })
        }else if (e.target.name === 'selectedMovie'){
            var selectedMovie = this.state.movies.find(movie => movie.movieName === e.target.value)
            this.setState({
                selectedMovie
            })
        }else if (e.target.name === 'selectedTemplate'){
            var selectedTemplate = this.state.movies.find(movie => movie.movieName === e.target.value)
            this.setState({
                selectedTemplate
            })
        }else{
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    changeDate = (date) => {
        
        this.setState({
            selectedEventStart: date
        })

        var newDate = format(date, 'yyyy-MM-dd-hh-mm').split("-");
        var DateArr = [parseInt(newDate[0]), parseInt(newDate[1]), parseInt(newDate[2]), parseInt(newDate[3]), parseInt(newDate[4])]
        this.setState({
            eventStart: DateArr
        })

    }

    render(){
    if(!this.props.loginState) {
        this.props.history.push('/login')
    }

    let movieList = [ {movieName:"Bitte Wählen"}, ...this.state.movies ]
    movieList = movieList.map((item) =>
        <option value={item.movieName}>{item.movieName}</option>
    );

    let seatingTemplates = [ {name:"Bitte Wählen"}, ...this.state.seatingTemplates ]
    seatingTemplates = seatingTemplates.map((item) =>
    <option value={item.name} >{item.name}</option>
);

    return (
        <>
            <Hero hero="programHero">
                <Banner title="AdminPage" />
            </Hero>

            <div className="login-Container">
                <form onSubmit = {this.handleShowEventSubmit}>
                <h6>ShowEvent hinzufügen</h6>
                <div>
                    <label>Movie</label>
                    <br/>
                    <select name="selectedMovie" onChange={this.handleChange}>      
                        {movieList} 
                    </select>
                </div>
                <div>
                    <label>Seating Template</label>
                    <br/>
                    <select name="selectedTemplate"  onChange={this.handleChange}>      
                        {seatingTemplates}  
                    </select>
                </div>
                <div>
                    <label for="eventStart">Eventstart</label>
                    <DatePicker selected={this.state.selectedEventStart} onChange={this.changeDate} showTimeSelect dateFormat='dd.MM.yyyy HH:mm' required />
                </div>
                <div>
                    <label>3D</label>
                    <br/>
                    <input type="checkbox" onChange={this.handleChange}  name="is3D" checked={this.state.is3D}/>
                </div>
                       
                <button  class="booking-btn" type="submit">ShowEvent erstellen</button>
                </form>


                <form onSubmit = {this.handleMovieSubmit}>
                <h6>Movie hinzufügen</h6>
                <div>
                    <label>Filmname</label>
                    <br/>
                    <input type="text" name="movieName" class="login_input" onChange={this.handleChange} required/>
                </div>
                <div>
                    <label>Hauptgenre</label>
                    <br/>
                    <input type="text" name="mainGenre" class="login_input"  onChange={this.handleChange} required/>
                </div>
                <div>
                    <label>Dauer</label>
                    <br/>
                    <input type="number" name="duration" class="login_input"  onChange={this.handleChange} required/>
                </div>
                <div>
                    <label>Trailer (url)</label>
                    <br/>
                    <input type="text" name="trailer" class="login_input"  onChange={this.handleChange} required/>
                </div>
                <div>
                    <label>Akteure</label>
                    <br/>
                    <input type="text" name="actors" class="login_input"  onChange={this.handleChange} required/>
                </div>
                <div>
                    <label>Produzent</label>
                    <br/>
                    <input type="text" name="producer" class="login_input"  onChange={this.handleChange} required/>
                </div>
                <div>
                    <label>Direktor</label>
                    <br/>
                    <input type="text" name="director" class="login_input"  onChange={this.handleChange} required/>
                </div>
                <div>
                    <label>Filmposter (url)</label>
                    <br/>
                    <input type="text" name="img" class="login_input"  onChange={this.handleChange} required/>
                </div>
                <div>
                    <label>Beschreibung</label>
                    <br/>
                    <input type="text" name="description" class="login_input"  onChange={this.handleChange} required/>
                </div>
                       
                <button  class="booking-btn" type="submit">Movie erstellen</button>
                </form>
            </div>
        </>
    );
    }
}

const mapStateToProps = (state) => {
    return {
        loginState: state.loginState
    }
}
export default connect(mapStateToProps)(AdminPage)