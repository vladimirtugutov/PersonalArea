import { combineReducers } from 'redux';
import contactReducer from './contacts';
import userReducer from './user';

const reducerSpec = {
  contactSlice: contactReducer,
  userSlice: userReducer,
};

const rootReducer = combineReducers(reducerSpec);

export default rootReducer;
