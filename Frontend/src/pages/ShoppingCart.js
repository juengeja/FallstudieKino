import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import ScrollButton from '../components/ScrollButton';
import axios from 'axios';

import KiddyPack from "../images/KiddyPack.png";
import PartnerMenu from "../images/PartnerMenu.png";
import BestsellerMenu from "../images/BestsellerMenu.png";
import BlockbusterMenu from "../images/BlockbusterMenu.png";

class ShoppingCart extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    removeEntry(url, data) {
        axios.put(url, data)
            .then(res => {
                if (res.data != null) {
                    if (res.data.bookingStatus === "reserved") {
                        this.props.items[this.props.items.length - 1] = res.data
                        this.props.history.push('/shoppingCart');
                    } else {
                        alert('Fehler')
                    }
                } else {
                    alert("Ein Fehler ist aufgetreten")
                }
            })
    }

    showMenu() {
        if (this.props.items.length && this.props.items[this.props.items.length - 1].reservations.length && this.props.items[this.props.items.length - 1].menu !== null) {
            let booking = this.props.items[this.props.items.length - 1]

            let imgsrc = ''

            if (booking.menu === 'KiddyPack') {
                imgsrc = KiddyPack
            } else if (booking.menu === 'BestsellerMenu') {
                imgsrc = BestsellerMenu
            } else if (booking.menu === 'BlockbusterMenu') {
                imgsrc = BlockbusterMenu
            } else if (booking.menu === 'PartnerMenu') {
                imgsrc = PartnerMenu
            }

            return (
                <>
                    <li class="li-container" >
                        <div class="cart-entry-img">
                            <img src={imgsrc} alt={booking.menu} width="100%" />
                        </div>

                        <div className="cart-entry-details">
                            <h6 className="title">{booking.menu.replace(/([A-Z])/g, ' $1').trim()}</h6>
                        </div>
                        <div class="cart-entry-buttons-menu">
                            <button className="btn-primary" onClick={() => { this.removeEntry("http://5.45.107.109:4000/api/remove/menu", booking) }}>Löschen</button>
                        </div>
                    </li>
                </>
            )
        } else {
            return null
        }
    }

    showMovies() {
        if (this.props.items.length && this.props.items[this.props.items.length - 1].reservations.length) {
            return (
                this.props.items[this.props.items.length - 1].reservations.map(reservation => {
                    let seats = reservation.seats.join(', ')
                    let splitSeats = seats.split('Astra').join('')

                    let splitedDate = reservation.eventStart.split('T')
                    let Date = splitedDate[0].split('-')
                    let newDate = Date[2] + "." + Date[1] + "." + Date[0] + " " + splitedDate[1] + " Uhr"

                    return (
                        <>
                            <li class="li-container" >
                                <div class="cart-entry-img">
                                    <img src={reservation.moviePoster} alt={reservation.moviePoster} width="100%" />
                                </div>

                                <div className="cart-entry-details">
                                    <h6 className="title">{reservation.movieName}</h6>
                                    <h6>{newDate}</h6>
                                    <h6>Sitzplatz: {splitSeats}</h6>
                                </div>
                                <div class="cart-entry-buttons">
                                    <button className="btn-primary" onClick={() => { this.removeEntry("http://5.45.107.109:4000/api/remove/" + reservation.reservationID) }}>Löschen</button>
                                </div>
                            </li>
                        </>
                    )
                })
            )
        } else {
            return (
                <div class="recipe">
                    <h6>Keine Filme im Warenkorb</h6>
                    <Link to='/program' className="btn-primary">
                        Zum Programm
                    </Link>
                </div>
            )
        }
    }

    showRecipe() {
        return (
            <div className="container">
                <div className="checkout">
                    <Link to='/booking' className="btn-primary">Zur Kasse</Link>
                </div>
            </div>
        )
    }

    render() {

        let showRecipe = this.props.items.length && this.props.items[this.props.items.length - 1].reservations.length ?
            <>
                <h6>Gesamtsumme: {this.props.items[this.props.items.length - 1].totalPrice}€</h6>
                {this.showRecipe()}
            </>
            : null

        return (
            <>
                <Hero hero='cartHero'>
                    <Banner title="Warenkorb"></Banner>
                </Hero>
                <section class="movielist">
                    <div class="cart-entry-container">
                        <ul class="collection">
                            {this.showMovies()}
                            {this.showMenu()}
                        </ul>
                        <div class="recipe">
                            {showRecipe}
                        </div>
                    </div>
                </section>
                <ScrollButton />
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
    }
}

export default connect(mapStateToProps)(ShoppingCart)