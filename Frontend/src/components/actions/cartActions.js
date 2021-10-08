import {ADD_ITEM,ADD_TO_CART,REMOVE_ITEM,ADD_SHIPPING} from './action-types/cart-actions'


//add cart action
export const addToCart=(id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//add item
export const addItem=(id)=>{
    return{
        type: ADD_ITEM,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}