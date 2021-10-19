import axios from 'axios';
import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { FaInfo, FaCreditCard, FaShoppingCart } from 'react-icons/fa';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns'

/*
const booking_json_template = {
    bookingID: "",
    customerInfo: {
        customerID: "",
        lastName: "",
        firstName: "",
        dateOfBirth: [],
        email: "",
        phoneNumber: "",
        user: false,
        username: "",
        password: ""
    },
    showEventInfo: "",
    paymentMethod: ""
}*/

class Booking extends Component {
    constructor(props) {
        super(props);

        this.state = {

            
            bookingID: "",
            customerInfo: {
                customerID: "",
                lastName: "",
                firstName: "",
                dateOfBirth: [],
                email: "",
                phoneNumber: "",
                user: false,
                username: "",
                password: ""
            },
            showEventInfo: "",
            paymentMethod: 'Kreditkarte'
        }
    };

    
componentDidMount(){
    (this.props.items).map(item => {
        this.setState({
            bookingID: [...this.state.bookingID, item.bookingID],
            showEventInfo: [...this.state.showEventInfo, item.eventID]
        });
    })
}

    handleChange = (e) => {
        if (e.target.name === "paymentMethod") {
            this.setState({
                [e.target.name]: e.target.value
            })
        }else if(e.target.name === "lastName"){
            var entry = `${e.target.value}`
            this.setState(prevState => ({
                customerInfo: {
                    ...prevState.customerInfo,
                    [e.target.name]: entry,
                    customerID: entry + Date().toLocaleString('de-DE')
                }
            }))
        }
        else {
            var entry = `${e.target.value}`
            this.setState(prevState => ({
                customerInfo: {
                    ...prevState.customerInfo,
                    [e.target.name]: entry
                }
            }))
        }
    }

    changeDate = (date) => {
        var newDate = format(date, 'yyyy-MM-dd').split("-");
        this.setState(prevState => ({
            customerInfo: {
                ...prevState.customerInfo,
                dateOfBirth: [parseInt(newDate[0]), parseInt(newDate[1]), parseInt(newDate[2])]
            }
        }))
       
      }

    handleSubmit = event => {
        event.preventDefault();
        console.log('Json : ' + JSON.stringify(this.state));
        axios.put('http://5.45.107.109:4000/api/reservation/successfulpayment', this.state)
            .then(res => {
                if (res.data != null) {
                    alert("hat funktioniert")
                    console.log(res.data)
                }
            })
    }



    render() {

        let ShoppingCart = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (
                        <li class="booking-shoppingcart" key={item.id}>
                            <div className="booking-cart-entry-container">
                                <h6 className="title">{item.movie}</h6>
                                <h6>{item.event}</h6>
                                <h6>Preis: {item.price}€</h6>
                                <h6>Gewählte Sitze: {item.seats}</h6>
                            </div>
                        </li>
                    )
                })
            ) :

            (
                <h6>Ein Fehler ist aufgetreten</h6>
            )

        return (
            <>
                <Hero hero='programHero'>
                    <Banner title="Buchung">
                    </Banner>
                </Hero>

                <div className="booking-wrapper">

                    <form onSubmit={this.handleSubmit}>
                        <div class="booking-container">
                            <div class="headline">
                                <FaInfo />Persönliche Daten
                            </div>
                            <div>
                                <label for="firstName">Vorname</label>
                                <input class="booking_input" type="text" name="firstName" onChange={this.handleChange} required />
                            </div>
                            <div>
                                <label for="lastName">Nachname</label>
                                <input class="booking_input" type="text" name="lastName" onChange={this.handleChange} required />
                            </div>
                            {/*
                            <div>
                                <label for="street">Straße</label>
                                <input class="booking_input" type="text" name="street" onChange={this.handleChange} required/>
                            </div>
                            <div>
                                <label for="number">Hausnummer</label>
                                <input class="booking_input" type="text" name="number" onChange={this.handleChange} required/>
                            </div>
                            <div>
                                <label for="city">Stadt</label>
                                <input class="booking_input" type="text" name="city" onChange={this.handleChange} required/>
                            </div>
                            <div>
                                <label for="zip">PLZ</label>
                                <input class="booking_input" type="text" name="zip" onChange={this.handleChange} required/>
                            </div>
                           */}
                            <div>
                                <label for="email">E-Mail Adresse</label>
                                <input class="booking_input" type="text" name="email" onChange={this.handleChange} required />
                            </div>
                            <div>
                                <label for="dateOfBirth">Geburtsdatum</label>
                                <DatePicker onChange={this.changeDate}/>
                            </div>                            
                            <div>
                                <label for="phoneNumber">Telefonnummer</label>
                                <input class="booking_input" type="text" name="phoneNumber" onChange={this.handleChange} required />
                            </div>

                            <div class="headline">
                                <FaCreditCard /> Zahlungsart
                            </div>
                            <div class="input-container">
                                <button className={this.state.paymentMethod === "Kreditkarte" ? "booking-btn" : "booking-btn-unselected"} name="paymentMethod" value="Kreditkarte" onClick={this.handleChange}>Kreditkarte</button>
                                <button className={this.state.paymentMethod === "PayPal" ? "booking-btn" : "booking-btn-unselected"} name="paymentMethod" value="PayPal" onClick={this.handleChange}>PayPal</button>
                                <button className={this.state.paymentMethod === "Rechnung" ? "booking-btn" : "booking-btn-unselected"} name="paymentMethod" value="Rechnung" onClick={this.handleChange}>Rechnung</button>
                                <button className={this.state.paymentMethod === "Bar" ? "booking-btn" : "booking-btn-unselected"} name="paymentMethod" value="Bar" onClick={this.handleChange}>Bar</button>
                            </div>

                        </div>
                        <div class="booking-container-right">
                            <div class="headline">
                                <FaShoppingCart /> Bestellübersicht
                            </div>
                            {ShoppingCart}
                                <Link to='/shoppingCart' className="booking-btn">Zurück zum Warenkorb</Link>
                                <button class="booking-btn" type="submit">Zahlungspflichtig bestellen</button>

                        </div>
                    </form>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
export default connect(mapStateToProps)(Booking)