import { combineReducers } from 'redux';

import authReducer from './auth';
import comments from "./comments";
import Search from './Search';
import Searched from './Searched';
import table from './time_table'
import videos from './videos'
import auth from './auth';
import askFeed from './askFeed';
import askExpert from './askExpert';
import Communities from './Communities';
import Notes from './Notes'

export const reducers = combineReducers({ auth, askFeed, askExpert,Communities,Notes, 
                                         videos,Search,comments,authReducer,Searched,table });
