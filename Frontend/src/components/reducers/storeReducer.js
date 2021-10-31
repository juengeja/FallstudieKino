import { ADD_TO_CART,ADD_ITEM,REMOVE_ITEM,REMOVE_ALL,CHANGE_STATE } from '../actions/action-types/store-actions'


const initState = {
    items: [],
    addedItems:[],
    loginState: false
}
const cartReducer= (state = initState,action)=>{
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
           
        return{
            ...state,
            addedItems: [...state.addedItems, addedItem],
        }    
    }
    
    if(action.type === ADD_ITEM){
        return { 
            ...state,
            items: [...state.items, action.id]
        }
    }

    if(action.type === REMOVE_ITEM){
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        return{
            ...state,
            addedItems: new_items,
        }
    }

    if(action.type === REMOVE_ALL){
        let new_items = []
        
        return{
            items: new_items,
            addedItems: new_items,
        }
    }

    if(action.type === CHANGE_STATE){

        return{
            loginState: true,
        }    
    }
    
  else{
    return state
    }
    
}

export default cartReducer