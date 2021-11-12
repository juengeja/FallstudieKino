import axios from 'axios';
import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { FaInfo, FaCreditCard, FaShoppingCart } from 'react-icons/fa';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns'
import { removeAll } from '../components/actions/storeActions'
import ScrollButton from '../components/ScrollButton';
import WaitingPopup from '../components/PopUps/Waiting'
import BookingSuccessfulPopup from '../components/PopUps/BookingSuccessful'
import BookingErrorPopup from '../components/PopUps/BookingError'

class Booking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            paymentMethod: "Kreditkarte",
            showSuccessfulPopup: false,
            showWaitingPopup: false,
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

    componentDidMount() {
        window.scrollTo(0, 0)
    }

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

        if (!this.state.customerInfo.dateOfBirth.length) {
            alert('Geburtstag wählen')
        } else {

            this.setState({ showWaitingPopup: !this.state.showWaitingPopup })

            var booking = this.props.items[this.props.items.length - 1]
            for (var i = 0; i < booking.reservations.length; i++) {
                booking.customerInfo = this.state.customerInfo
                booking.paymentMethod = this.state.paymentMethod
            }

            axios.put('http://5.45.107.109:4000/api/reservation/successfulpayment', booking)
                .then(res => {
                    if (res.data != null) {
                        if (res.data.bookingStatus === "paid") {
                            this.handleRemove()
                            this.setState({
                                showSuccessfulPopup: !this.state.showSuccessfulPopup
                            })
                        } else {
                            this.handleRemove()
                            this.setState({
                                showErrorPopup: !this.state.showErrorPopup
                            })
                        }
                    } else {
                        alert("Ein Fehler ist aufgetreten")
                    }
                })
        }
    }

    showMenu() {
        if (this.props.items.length && this.props.items[this.props.items.length - 1].reservations.length && this.props.items[this.props.items.length - 1].menu !== null) {
            let booking = this.props.items[this.props.items.length - 1]

            return (
                <>
                    <li class="booking-shoppingcart" >
                        <div className="booking-cart-entry-container">
                            <h6 className="booking_title">{booking.menu.replace(/([A-Z])/g, ' $1').trim()}</h6>
                        </div>
                    </li>
                </>
            )
        } else {
            return null
        }
    }

    showMovies() {
        if (this.props.items.length) {
            return (
                this.props.items[this.props.items.length - 1].reservations.map(reservation => {

                    let seats = reservation.seats.join(', ')
                    let splitSeats = seats.split('Astra').join('')
                    let splitedDate = reservation.eventStart.split('T')
                    let Date = splitedDate[0].split('-')
                    let newDate = Date[2] + "." + Date[1] + "." + Date[0] + " " + splitedDate[1] + " Uhr"

                    return (
                        <>
                            <li class="booking-shoppingcart"  >
                                <div className="booking-cart-entry-container">
                                    <h6 className="booking_title">{reservation.movieName}</h6>
                                    <h6>{newDate}</h6>
                                    <h6>Sitzplatz: {splitSeats}</h6>
                                </div>
                            </li>
                        </>
                    )
                })
            )
        } else {
            return (
                <h6>Kein Film im Warenkorb</h6>
            )
        }
    }

    render() {

        return (
            <>

                <Hero hero='bookingHero'>
                    <Banner title="Buchung" />
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
                                <button className={this.state.paymentMethod === "Klarna" ? "booking-btn" : "booking-btn-unselected"} name="paymentMethod" type="button" value="Klarna" onClick={this.handleChange}>Klarna</button>
                                <button className={this.state.paymentMethod === "Uberweisung" ? "booking-btn" : "booking-btn-unselected"} name="paymentMethod" type="button" value="Uberweisung" onClick={this.handleChange}>Überweisung</button>
                                <button className={this.state.paymentMethod === "Giropay" ? "booking-btn" : "booking-btn-unselected"} name="paymentMethod" type="button" value="Giropay" onClick={this.handleChange}>Giropay</button>
                                <button className={this.state.paymentMethod === "Lastschrift" ? "booking-btn" : "booking-btn-unselected"} name="paymentMethod" type="button" value="Lastschrift" onClick={this.handleChange}>Lastschrift</button>
                                <button className={this.state.paymentMethod === "Vorkasse" ? "booking-btn" : "booking-btn-unselected"} name="paymentMethod" type="button" value="Vorkasse" onClick={this.handleChange}>Vorkasse</button>
                            </div>

                        </div>
                        <div class="booking-container-right">
                            <div class="headline">
                                <FaShoppingCart /> Bestellübersicht
                            </div>
                            {this.showMovies()}
                            {this.showMenu()}
                            {this.props.items.length ? <h6>Gesamtsumme: {this.props.items[this.props.items.length - 1].totalPrice}€</h6> : null}
                            <button className="booking-btn_100" onClick={() => this.props.history.push('/shoppingCart')}>Zurück zum Warenkorb</button>
                            <button class="booking-btn_100" type="submit">Kostenpflichtig bestellen</button>

                        </div>
                    </form>
                    {this.state.showWaitingPopup ? <WaitingPopup /> : null}
                    {this.state.showSuccessfulPopup ? <BookingSuccessfulPopup /> : null}
                    {this.state.showErrorPopup ? <BookingErrorPopup /> : null}
                </div>
                <ScrollButton />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeAll: (id) => { dispatch(removeAll(id)) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Booking)
