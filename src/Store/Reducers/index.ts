import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer/';
import ConfigsReducer from './ConfigsReducer/';
import HomeReducer from './HomeReducer/';

export default combineReducers({
  AuthReducer,
  ConfigsReducer,
  HomeReducer,
});
