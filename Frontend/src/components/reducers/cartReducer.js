import { ADD_TO_CART,ADD_ITEM,REMOVE_ITEM,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   console.log(state.items)

    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
        let newTotal = state.total + addedItem.price 
            
        return{
            ...state,
            addedItems: [...state.addedItems, addedItem],
            total : newTotal
        }    
    }
    
    if(action.type === ADD_ITEM){
        return { 
            ...state,
            items: [...state.items, action.id]
        }
    }

    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - itemToRemove.price
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 4
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 4
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer