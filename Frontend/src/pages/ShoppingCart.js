import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem } from '../components/actions/cartActions'
import Recipe from '../components/Recipe'
import Hero from '../components/Hero';
import Banner from '../components/Banner';

class ShoppingCart extends Component {

    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }

    render() {


        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (
                        <>
                            <li class="li-container" key={item.id}>
                                <div class="cart-entry-img">
                                    <img src={item.img} alt={item.img} width="100%" />
                                </div>

                                <div className="cart-entry-details">
                                    <h6 className="title">{item.movie}</h6>
                                    <h6>{item.event}</h6>
                                    <h6>Gewählte Sitze: {item.seats}</h6>
                                    <h6>Preis: {item.price}€</h6>         
                                </div>
                                <div class="cart-entry-buttons">
                                <button className="btn-primary" onClick={() => { this.handleRemove(item.id) }}>Löschen</button>
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


        let showRecipe = this.props.items.length ? <Recipe /> : null
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