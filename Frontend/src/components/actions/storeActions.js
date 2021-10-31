import {ADD_ITEM,ADD_TO_CART,REMOVE_ITEM,REMOVE_ALL, CHANGE_STATE} from './action-types/store-actions'


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
//remove all items
export const removeAll=(id)=>{
    return{
        type: REMOVE_ALL,
        id
    }
}
//change LoginState
export const changeState=() =>{
    return{
        type: CHANGE_STATE,
    }
}