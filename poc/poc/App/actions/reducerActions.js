import * as types from './ActionTypes'
var _ = require('lodash/core');

export function addToCart(item){
  //alert(JSON.stringify(item))
  return {
    type: types.ADD_TO_CART,
    item:item
  }
}
export function fetchItems(response){
  var res = response.products
  console.log("res",res);
  //_.values(response)
  return {
    type: types.FETCH_ITEMS,
    response:res
  }
}

export function apiToFetch(){
  return (dispatch,getState)=>{
  //  console.log("log for loadfing STARTED");
    dispatch(loading(true));
    //var c = new Date()
    //console.log("API CALL STARTED",c.getTime());
    fetch('https://projectpos.vendhq.com/api/products', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization':'Bearer 5OtjwgBqfHJZh8NKxnSTP:fxR6cVw2aflNVf3U1l'
            }
          })
          .then((response) =>response.json())
          .then((responseJson) => {
            //var a = new Date()
          //  console.log("API parse to json ended",a.getTime());
            console.log("response",responseJson);
            console.log("log for loading Ended");
            dispatch(fetchItems(responseJson))
            dispatch(loading(false))
            ///below will be called atfter the api calls
            //dispatch(loadingForLogin())
            //dispatch(setToken(responseJson))
            //dispatch(navToMain())
          })
          .catch((error) => {
            console.log(error);
            dispatch(loading(false))
            //dispatch(setError())
          });
        }
}
export function loading(value){
  return {
    type: types.LOADING,
    value: value
  }
}
