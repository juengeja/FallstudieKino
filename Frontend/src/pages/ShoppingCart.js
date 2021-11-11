import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, addItem, removeAll} from '../components/actions/storeActions';
import Recipe from '../components/Recipe'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import axios from 'axios';
import ScrollButton from '../components/ScrollButton';

class ShoppingCart extends Component {

    componentDidMount(){
        window.scrollTo(0, 0)
    }
    
    removeReservtion(reservationID) {
    let url = 'http://5.45.107.109:4000/api/remove/' + reservationID;
    axios.put(url)
    .then(res => {
        if (res.data != null) {
            if (res.data.bookingStatus === "reserved") {
                this.props.items[this.props.items.length-1] = res.data
                this.props.history.push('/shoppingCart');
            } else {
                alert('Fehler')
            }
          } else {
            alert("Ein Fehler ist aufgetreten")
          }
      })
  }

    render() {
        let addedItems = this.props.items.length && this.props.items[this.props.items.length - 1].reservations.length ?
            (
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
                                    <button className="btn-primary" onClick={() => { this.removeReservtion(reservation.reservationID) }}>Löschen</button>
                                </div>
                            </li>
                        </>
                    )
                })

            ) :

            (
                <>
                    <div class="recipe">
                        <h6>Keine Filme im Warenkorb</h6>
                        <Link to='/program' className="btn-primary">
                            Zum Programm
                        </Link>
                    </div>
                </>
            )


        let showRecipe = this.props.items.length && this.props.items[this.props.items.length - 1].reservations.length ? <><h6>Gesamtsumme: {this.props.items[this.props.items.length - 1].totalPrice}€</h6><Recipe /></> : null
        let menu = this.props.items.length && this.props.items[this.props.items.length - 1].reservations.length ? <><h6>Hinzugefügtes Menü: {this.props.items[this.props.items.length - 1].menue}</h6></> : null
     
        return (
            <>
                <Hero hero='cartHero'>
                    <Banner title="Warenkorb"></Banner>
                </Hero>
                <section class="movielist">
                    <div class="cart-entry-container">
                        <ul class="collection">
                            {addedItems}
                        </ul>
                        <div class="recipe">
                            {menu}
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

const mapDispatchToProps = (dispatch) => {

    return {
      addToCart: (id) => { dispatch(addToCart(id)) },
      addItem: (id) => { dispatch(addItem(id)) },
      removeAll: (id) => { dispatch(removeAll(id)) },
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)