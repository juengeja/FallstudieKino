import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { addToCart, addItem, removeAll } from './actions/storeActions';



class ShoppingCartEntries extends Component{

   

    render(){
  
        return(
            <ul class="collection">
                {this.showMovies()}
                {this.showMenu()}
            </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartEntries)