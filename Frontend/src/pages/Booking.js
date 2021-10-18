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
            bookingID: '',
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
            showEventInfo: '',
            paymentMethod: 'Kreditkarte'
        }
    };


    handleChange = (e) => {
        if (e.target.name === "paymentMethod") {
            this.setState({
                [e.target.name]: e.target.value
            })
        }else {
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
                            <h6 class="headline">
                                <FaInfo />Persönliche Daten
                            </h6>
                            <div>
                                <label for="firstName">Vorname</label>
                                <input class="booking_input" type="text" name="firstName" onChange={this.handleChange, this.handleID} required />
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

                            <h6 class="headline">
                                <FaCreditCard /> Zahlungsart
                            </h6>
                            <div class="input-container">
                                <div className="radio">
                                    <label>
                                        <input name="paymentMethod" type="radio" value="Kreditkarte" checked={this.state.paymentMethod === 'Kreditkarte'} onChange={this.handleChange} />
                                        Kreditkarte
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input name="paymentMethod" type="radio" value="PayPal" checked={this.state.paymentMethod === 'PayPal'} onChange={this.handleChange} />
                                        PayPal
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input name="paymentMethod" type="radio" value="Rechnung" checked={this.state.paymentMethod === 'Rechnung'} onChange={this.handleChange} />
                                        Rechnung
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input name="paymentMethod" type="radio" value="Bar" checked={this.state.paymentMethod === 'Bar'} onChange={this.handleChange} />
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

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
export default connect(mapStateToProps)(Booking)