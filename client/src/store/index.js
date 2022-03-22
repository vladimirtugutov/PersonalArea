import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const initialState = {
  contactSlice: {
    loading: false,
    error: null,
    data: [],
  },
  userSlice: {
    user: null,
  },
};

const middlewares = [thunk, sagaMiddleware];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
sagaMiddleware.run(rootSaga);

export default store;
