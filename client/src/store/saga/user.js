import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../types/user';
import * as actions from '../actions/user';

function* loginUser(action) {
  const { payload } = action;
  try {
    const { data } = yield call(() => axios.post('http://localhost:5000/api/auth/signin', payload, { withCredentials: true }));
    if (data.username === 'Данные введены неверно!') {
      // eslint-disable-next-line no-alert
      alert(data.username);
    } else {
      yield put(actions.authUserSuccess(data));
    }
  } catch (error) {
    yield put(actions.authUserError(error));
  }
}

function* regUser(action) {
  const { payload } = action;
  try {
    const { data } = yield call(() => axios.post('http://localhost:5000/api/auth/register', payload, { withCredentials: true }));
    yield put(actions.regUserSuccess(data));
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert('Пользователь не зарегистрирован. Возможно пользователь с такими учетными данными уже существует.');
    yield put(actions.regUserError(error));
  }
}

function* logoutUser() {
  try {
    const res = yield call(() => axios.get('http://localhost:5000/api/auth/logout', { withCredentials: true }));
    if (res.status !== 200) {
      throw Error();
    }
    yield put(actions.logoutUserSuccess());
  } catch (error) {
    yield put(actions.logoutUserError(error));
  }
}

function* checkAuthUser() {
  try {
    const { data } = yield call(() => axios.get('http://localhost:5000/api/auth/check', { withCredentials: true }));
    if (!data || data === '') {
      yield put(actions.checkAuthSuccess({ auth: null }));
    }
    yield put(actions.checkAuthSuccess(data));
  } catch (error) {
    yield put(actions.checkAuthError(error));
  }
}

export default function* usersSaga() {
  yield takeEvery(types.AUTH_USER_START, loginUser);
  yield takeEvery(types.REG_USER_START, regUser);
  yield takeEvery(types.LOGOUT_USER_START, logoutUser);
  yield takeEvery(types.CHECK_AUTH_START, checkAuthUser);
}
