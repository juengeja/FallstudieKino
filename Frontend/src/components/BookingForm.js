import axios from 'axios';
import React, {Component} from 'react'

class BookingForm extends Component {

    constructor(props) {
        super (props)

        this.state = {
            id: '',
            fist_name: '',
            last_name:  ''
        }
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


    render() {
        const {bookingId, fistName, lastName} = this.state
        return (
            <div data-testid="booking-1">
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
        );
    }
}

export default BookingForm