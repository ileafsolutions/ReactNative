import createReducer from '../lib/createReducer'
import * as actionTypes from '../actions/ActionTypes'
export const recipeReducer = createReducer({},{});

export const addToCartReducer = createReducer([] , {
  [actionTypes.ADD_TO_CART](state,action){
    var flag = false
    var newState = state.map( (item, index) => {
        if(item.id !== action.item.id) {
            // This isn't the item we care about - keep it as-is
            return item;
        }else{
        flag= true
        action.item.qty = item.qty + 1
        // Otherwise, this is the one we want - return an updated value
        return {
            ...item,
            ...action.item
        };
      }
    });

    if(!flag){
      console.log("STATE",state);
      let newArray = state.slice();
      newArray.splice(state.length, 0, action.item);
      console.log("STATE",newArray);
      return newArray;
    }
    else{
      return newState
    }
  }
});
export const loader = createReducer(false,{
  [actionTypes.LOADING](state,action){
    return action.value
  }
});
export const itemsList = createReducer([] , {
  [actionTypes.FETCH_ITEMS](state,action){
    console.log('action',action.response);
    return action.response;
  }
});
