import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import  thunk from 'redux-thunk'
import {createStore , applyMiddleware , compose} from 'redux'
import {reducers} from './Reducers';

const store =createStore(reducers,compose(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
      </Provider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
