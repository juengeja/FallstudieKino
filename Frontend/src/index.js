import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MovieProvider} from './MovieContext';
import cartReducer from './components/reducers/storeReducer.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartReducer);

ReactDOM.render(
  <Provider store={store}>
    <MovieProvider>
      <Router>
         <App />
      </Router>
    </MovieProvider>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
