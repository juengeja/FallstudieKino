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
            bookingID: 'Tue Oct 19 2021 09:01:14 GMT+0200 (Central European Summer Time)',
            customerInfo: {
                customerID: null,
                lastName: null,
                firstName: null,
                dateOfBirth: null,
                email: null,
                phoneNumber: null,
                user: null,
                username: null,
                password: null
            },
            showEventInfo: 'secondEvent',
            paymentMethod: 'Kreditkarte'
        }
    };


    handleChange = (e) => {
        if (e.target.name === "paymentMethod") {
            this.setState({
                [e.target.name]: e.target.value
            })
        } else {
            var entry = `${e.target.value}`
            this.setState(prevState => ({
                customerInfo: {
                    ...prevState.customerInfo,
                    [e.target.name]: entry
                }
            }))
        }
    }

    handleID = () => {

        (this.props.items).map(item => {
            this.setState({
                bookingID: [...this.state.bookingID, item.bookingID],
                showEventInfo: [...this.state.showEventInfo, item.eventID]
            });
        })
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
                    <div class="booking-container">
                        <form onSubmit={this.handleSubmit}>
                            <div class="headline">
                                <FaInfo />Persönliche Daten
                            </div>
                            <div>
                                <label for="firstName">Vorname</label>
                                <input class="booking_input" type="text" name="firstName" onChange={this.handleChange/*, this.handleID*/} required />
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
                                <input class="booking_input" type="text" name="dateOfBirth" onChange={this.handleChange} required />
                            </div>                            <div>
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
                        </form>
                    </div>
                    <div class="booking-container-right">
                        <div class="headline">
                            <FaShoppingCart /> Bestellübersicht
                        </div>
                        {ShoppingCart}

                        <div class="btns">
                            <Link to='/shoppingCart' className="booking-btn">Zurück zum Warenkorb</Link>
                            <button class="booking-btn" type="submit">Zahlungspflichtig bestellen</button>
                        </div>

                    </div>
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