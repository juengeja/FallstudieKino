import axios from 'axios';
import React, { Component } from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom'
import { FaInfo, FaCreditCard, FaShoppingCart } from 'react-icons/fa';
import { connect } from 'react-redux'

class Booking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookingID: "booking2021",
            customerInfo: {
                customerID: null,
                lastName: "Fitzke",
                firstName: "Tobias",
                dateOfBirth: null,
                email: null,
                phoneNumber: null,
                user: null,
                username: null,
                password: null
                },
            showEventInfo: "secondEvent",
            seatInfo: [],
            paymentMethod: null
            }
    };


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }





    handleSubmit = event => {
        event.preventDefault();
        
        const test = {
            bookingID: "booking2021",
            customerInfo: {
                customerID: null,
                lastName: "Fitzke",
                firstName: "Tobias",
                dateOfBirth: null,
                email: null,
                phoneNumber: "0123456",
                user: null,
                username: null,
                password: null
                },
            showEventInfo: "secondEvent",
            paymentMethod: null
            }
/*
const test = {
    "bookingID": "booking2021",
    "customerInfo": {
        "customerID": null,
        "lastName": "Fitzke",
        "firstName": "Tobias",
        "dateOfBirth": null,
        "email": null,
        "phoneNumber": null,
        "user": null,
        "username": null,
        "password": null
        },
    "showEventInfo": "secondEvent",
    "seatInfo": ["AstraC12"],
    "paymentMethod": null
    }
*/

        axios.put('http://5.45.107.109:4000/api/reservation/successfulpayment', test)
            .then(res => {
                if (res.data != null) {
                    alert("hat funktioniert")
                  }
            })
    }

    render() {
        
        let ShoppingCart = this.props.items.length ?
        ( 
            this.props.items.map(item=>{
                    return(
                        <li class="li-container" key={item.id}>                                
                                    <div className="booking-cart-entry-container">
                                        <h6 className="title">{item.movie}</h6>
                                        <h6>{item.event}</h6>
                                        <h6>Preis: {item.price}€</h6> 
                                        <h6>Gewählte Sitze: {item.seats}</h6> 
                                    </div>                                   
                                </li>
                    )
                })
                ):

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
                    <div class="booking-container">
                        <form onSubmit={this.handleSubmit}>
                            <h6 class="headline">
                                <FaInfo />Persönliche Daten
                            </h6>
                            <div>
                                <label for="first_name">Vorname</label>
                                <input class="booking_input" type="text" name="first_name" onChange={this.handleChange} required/>
                            </div>
                            <div>
                                <label for="last_name">Nachname</label>
                                <input class="booking_input" type="text" name="last_name" onChange={this.handleChange} required/>
                            </div>
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
                            <div>
                                <label for="email">E-Mail Adresse</label>
                                <input class="booking_input" type="text" name="email" onChange={this.handleChange} required/>
                            </div>

                            <h6 class="headline">
                                <FaCreditCard /> Zahlungsart
                            </h6>
                            <div class="input-container">
                                <div className="radio">
                                    <label>
                                        <input name="pay_method" type="radio" value="Kreditkarte" checked={this.state.pay_method === 'Kreditkarte'} onChange={this.handleChange} />
                                        Kreditkarte
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input name="pay_method" type="radio" value="PayPal" checked={this.state.pay_method === 'PayPal'} onChange={this.handleChange} />
                                        PayPal
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input name="pay_method" type="radio" value="Rechnung" checked={this.state.pay_method === 'Rechnung'} onChange={this.handleChange} />
                                        Rechnung
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input name="pay_method" type="radio" value="Bar" checked={this.state.pay_method === 'Bar'} onChange={this.handleChange} />
                                        Bar
                                    </label>
                                </div>
                            </div>

                            <h6 class="headline">
                                <FaShoppingCart /> Bestellübersicht
                            </h6>
                            {ShoppingCart}


                            <div class="btns">
                                <Link to='/shoppingCart' className="btn-primary">Zurück zum Warenkorb</Link>
                                <button class="btn-primary" type="submit">Zahlungspflichtig bestellen</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
export default connect(mapStateToProps)(Booking)