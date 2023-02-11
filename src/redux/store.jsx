import { combineReducers } from 'redux';
import userReducer from './auth/auth';

const rootReducer = combineReducers({
  auth: userReducer
});

export default rootReducer;
