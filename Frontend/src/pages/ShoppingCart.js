import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem } from '../components/actions/cartActions'
import Recipe from '../components/Recipe'
import Hero from '../components/Hero';
import Banner from '../components/Banner';

class ShoppingCart extends Component {

    handleRemove = (id) => {
        this.props.removeItem(id);
    }

    render() {
        let addedItems = this.props.items.length ?
            (
                this.props.items[this.props.items.length-1].reservations.map(reservation =>{

                    let seats = reservation.seats.join(', ')
                    let splitSeats = seats.split('Astra').join('')
                
                    return (
                        <>
                            <li class="li-container" >
                                <div class="cart-entry-img">
                                    <img src={reservation.moviePoster} alt={reservation.moviePoster} width="100%" />
                                </div>
                                
                                <div className="cart-entry-details">
                                    <h6 className="title">{reservation.moviename}</h6>
                                    <h6>{reservation.eventStart}</h6>
                                    <h6>Gewählte Sitze: {splitSeats}</h6>      
                                </div>
                                <div class="cart-entry-buttons">
                                <button className="btn-primary" onClick={() => { this.handleRemove(/*item.id*/) }}>Löschen</button>
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


        let showRecipe = this.props.items.length ? <><h6>Gesamtsumme: {this.props.items[this.props.items.length-1].totalPrice}€</h6><Recipe /></> : null
        return (
            <>
                <Hero hero='programHero'>
                    <Banner title="Warenkorb"></Banner>
                </Hero>
                <section class="movielist">
                    <div class="cart-entry-container">
                        <ul class="collection">
                            {addedItems}                             
                        </ul>
                        <div class="recipe">
                            {showRecipe}
                        </div>
                    </div>
                </section>
            </>
        )
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
        removeItem: (id) => { dispatch(removeItem(id)) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)