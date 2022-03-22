import { all } from 'redux-saga/effects';
import contactSaga from './contacts';
import userSaga from './user';

export default function* rootSaga() {
  yield all([userSaga(), contactSaga()]);
}
