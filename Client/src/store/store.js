import {createStore, applyMiddleware, compose} from 'redux';
import {reducers} from '../Reducers/index';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers,compose(applyMiddleware(thunk)));

export default store;
