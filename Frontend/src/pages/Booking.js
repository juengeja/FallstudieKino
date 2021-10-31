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
import { removeAll } from '../components/actions/storeActions'

class Booking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            paymentMethod: "Kreditkarte",
            showSuccessfulPopup: false,
            showErrorPopup: this.props.items.length ? false : true,
            selectedDate: new Date('2001-01-01'),
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
        }
    };

    handleRemove = (id) => {
        this.props.removeAll(id);
    }

    handleChange = (e) => {
        if (e.target.name === "paymentMethod") {

            this.setState({
                paymentMethod: e.target.value,
            })
        } else if (e.target.name === "lastName") {
            var entry = `${e.target.value}`

            var tempJSON = this.state.customerInfo
            tempJSON[e.target.name] = entry
            tempJSON.customerID = entry + Date().toLocaleString('de-DE')

            this.setState({
                customerInfo: tempJSON
            })
        } else {
            var tempJSON = this.state.customerInfo
            tempJSON[e.target.name] = `${e.target.value}`

            this.setState({
                customerInfo: tempJSON
            })
        }
    }

    changeDate = (date) => {
        this.setState({
            selectedDate: date
        })

        var newDate = format(date, 'yyyy-MM-dd').split("-");

        var tempJSON = this.state.customerInfo
        tempJSON.dateOfBirth = [parseInt(newDate[0]), parseInt(newDate[1]), parseInt(newDate[2])]
        this.setState({
            customerInfo: tempJSON
        })
    }


    handleSubmit = event => {
        event.preventDefault();

        var booking = this.props.items[this.props.items.length - 1]
        for (var i = 0; i < booking.reservations.length; i++) {
            booking.customerInfo = this.state.customerInfo
            booking.paymentMethod = this.state.paymentMethod
        }

        axios.put('http://5.45.107.109:4000/api/reservation/successfulpayment', booking)
            .then(res => {
                if (res.data != null) {
                    this.handleRemove()
                    if (res.data.bookingStatus === "paid") {
                        this.setState({
                            showSuccessfulPopup: !this.state.showSuccessfulPopup
                        })
                    } else {
                        this.setState({
                            showErrorPopup: !this.state.showErrorPopup
                        })
                    }
                } else {
                    alert("Ein Fehler ist aufgetreten")
                }
            })
    }

    render() {
        let ShoppingCart = this.props.items.length ?
            (
                this.props.items[this.props.items.length - 1].reservations.map(reservation => {

                    let seats = reservation.seats.join(', ')
                    let splitSeats = seats.split('Astra').join('')

                    return (
                        <>
                            <li class="booking-shoppingcart"  >
                                <div className="booking-cart-entry-container">
                                    <h6 className="booking_title">{reservation.movieName}</h6>
                                    <h6>{reservation.eventStart}</h6>
                                    <h6>Gewählte Sitze: {splitSeats}</h6>
                                </div>
                            </li>
                        </>
                    )
                })

            ) :
            (
                <h6>Kein Film im Warenkorb</h6>
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

                            <div>
                                <label for="email">E-Mail Adresse</label>
                                <input class="booking_input" type="email" name="email" onChange={this.handleChange} required />
                            </div>
                            <div>
                                <label for="dateOfBirth">Geburtsdatum</label>
                                <DatePicker selected={this.state.selectedDate} onChange={this.changeDate} dateFormat='dd.MM.yyyy' required />
                            </div>
                            <div>
                                <label for="phoneNumber">Telefonnummer</label>
                                <input class="booking_input" type="text" name="phoneNumber" onChange={this.handleChange} required />
                            </div>

                            <div class="headline" style={{ 'margin-top': '5%' }}>
                                <FaCreditCard /> Zahlungsart
                            </div>
                            <div class="input-container">
                                <button className={this.state.paymentMethod === "Kreditkarte" ? "booking-btn" : "booking-btn-unselected"} name="paymentMethod" type="button" value="Kreditkarte" onClick={this.handleChange}>Kreditkarte</button>
                                <button className={this.state.paymentMethod === "PayPal" ? "booking-btn" : "booking-btn-unselected"} name="paymentMethod" type="button" value="PayPal" onClick={this.handleChange}>PayPal</button>
                                <button className={this.state.paymentMethod === "Rechnung" ? "booking-btn" : "booking-btn-unselected"} name="paymentMethod" type="button" value="Rechnung" onClick={this.handleChange}>Rechnung</button>
                                <button className={this.state.paymentMethod === "Bar" ? "booking-btn" : "booking-btn-unselected"} name="paymentMethod" type="button" value="Bar" onClick={this.handleChange}>Bar</button>
                            </div>

                        </div>
                        <div class="booking-container-right">
                            <div class="headline">
                                <FaShoppingCart /> Bestellübersicht
                            </div>
                            {ShoppingCart}
                            {this.props.items.length ? <h6>Gesamtsumme: {this.props.items[this.props.items.length - 1].totalPrice}€</h6> : null}
                            <button className="booking-btn_100" onClick={() => this.props.history.push('/shoppingCart')}>Zurück zum Warenkorb</button>
                            <button class="booking-btn_100" type="submit">Kostenpflichtig bestellen</button>

                        </div>
                    </form>
                    {this.state.showSuccessfulPopup ? <SuccessfulPopup /> : null}
                    {this.state.showErrorPopup ? <ErrorPopup /> : null}
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
const mapDispatchToProps = (dispatch) => {
    return {
        removeAll: (id) => { dispatch(removeAll(id)) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Booking)

class SuccessfulPopup extends Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h6>Vielen Dank für Ihre Bestellung. Sie werden in Kürze eine Bestätigungs-Email erhalten.</h6>
                    <Link to='/' className="btn-primary">Zum Startsete</Link>
                </div>
            </div>
        );
    }
}

class ErrorPopup extends Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h6>Leider ist etwas schiefgelaufen. Bitte versuchen sie es erneut</h6>
                    <Link to='/' className="btn-primary">Zum Startseite</Link>
                </div>
            </div>
        );
    }
}