import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

//this is our main application
import App from './components/app';
//This is our root reducer(all reducer combine here)
import reducers from './reducers';

//Creating Redux store
const store = createStore(
  //root Reducer is placed here
  reducers,
  //initializing state
  {},
  //applying middleware
  applyMiddleware(reduxThunk)
)

//rendering the application to ReactDOM 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
