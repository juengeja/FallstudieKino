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




class Booking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookings: [],
            bookingIDs: [],
            showEventInfos: [],
            paymentMethod: 'Kreditkarte',
            showSuccessfulPopup: false,
            showErrorPopup: false,
            selectedDate: new Date('2001-01-01')
        }
    };


    componentDidMount() {
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
        }

        this.props.items.map(item => {
            this.setState(prevState => ({
                bookingIDs: [...prevState.bookingIDs, item.bookingID],
                showEventInfos: [...prevState.showEventInfos, item.eventID]
            }));
        })

        for (var i = 0; i < this.props.items.length; i++) {
            this.setState(prevState => ({
                bookings: [...prevState.bookings, booking_json_template]
            }))
        }

    }


    handleChange = (e) => {
        if (e.target.name === "paymentMethod") {
            const newArr = [...this.state.bookings]
            for (var i = 0; i < this.state.bookings.length; i++) {

                newArr[i][e.target.name] = e.target.value

                this.setState({
                    bookings: newArr,
                    paymentMethod: e.target.value
                })
            }
        } else if (e.target.name === "lastName") {
            var entry = `${e.target.value}`

            const newArr = [...this.state.bookings]
            for (var i = 0; i < this.state.bookings.length; i++) {

                //aua aua  aua
                newArr[i].bookingID = this.state.bookingIDs[i]
                newArr[i].showEventInfo = this.state.showEventInfos[i]
                //
                newArr[i].customerInfo[e.target.name] = entry
                newArr[i].customerInfo.customerID = entry + Date().toLocaleString('de-DE')

                this.setState({
                    bookings: newArr
                })
            }
        } else {
            var entry = `${e.target.value}`
            const newArr = [...this.state.bookings]
            for (var i = 0; i < this.state.bookings.length; i++) {

                newArr[i].customerInfo[e.target.name] = entry

                this.setState({
                    bookings: newArr
                })
            }
        }
    }

    changeDate = (date) => {
        this.setState({
            selectedDate:date
        })

        var newDate = format(date, 'yyyy-MM-dd').split("-");

        const newArr = [...this.state.bookings]
        for (var i = 0; i < this.state.bookings.length; i++) {

            newArr[i].customerInfo.dateOfBirth = [parseInt(newDate[0]), parseInt(newDate[1]), parseInt(newDate[2])]

            this.setState({
                bookings: newArr,
            })
        }
    }


    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.bookingIDs)
        for (var i = 0; i < this.state.bookings.length; i++) {
            console.log('Json' + [i] + ' : ' + JSON.stringify(this.state.bookings[i]));
            axios.put('http://5.45.107.109:4000/api/reservation/successfulpayment', this.state.bookings[i])
                .then(res => {
                    if (res.data != null) {
                        //change  value
                        if (res.data.bookingStatus === "reserved") {
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
                                <h6>Gewählte Sitze: {item.seats.join(', ')}</h6>
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
                                <DatePicker selected={this.state.selectedDate} onChange={this.changeDate} dateFormat='dd.MM.yyyy'/>
                            </div>
                            <div>
                                <label for="phoneNumber">Telefonnummer</label>
                                <input class="booking_input" type="text" name="phoneNumber" onChange={this.handleChange} required />
                            </div>

                            <div class="headline" style={{'margin-top':'5%'}}>
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
                            <Link to='/shoppingCart' className="booking-btn">Zurück zum Warenkorb</Link>
                            <button class="booking-btn" type="submit">Zahlungspflichtig bestellen</button>

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
export default connect(mapStateToProps)(Booking)

class SuccessfulPopup extends Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h6>Vielen Dank für Ihre Bestellung. Sie werden in Kürze eine Bestätigungs-Email erhalten.</h6>
                    <Link to='/home' className="btn-primary">Zum Startsete</Link>
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
                    <Link to='/home' className="btn-primary">Zum Startsete</Link>
                </div>
            </div>
        );
    }
}