import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,combineReducers,compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'
import createLogger from 'redux-logger'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import RootContainer from './containers/RootContainer'
const loggerMiddleware = createLogger({predicate:(getstate,actions) => __DEV__});
function configureStore(initialState){
  const enhancer = compose(applyMiddleware(
    thunkMiddleware,
    loggerMiddleware),);
    return createStore(reducer,initialState,enhancer);
}
const store = configureStore({});

export default class EntryPoint extends Component {
  render() {
    console.log("Hello");
    return (
      <Provider store={store}>
        <RootContainer/>
      </Provider>
    );
  }
}
