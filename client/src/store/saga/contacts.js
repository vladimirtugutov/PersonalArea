import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../types/contacts';
import * as actions from '../actions/contacts';

function* addContact(action) {
  const { payload } = action;
  const { name, phone, contactData } = payload;
  // {name: 'Vova', phone: '77777', contactData: 'UUD'}
  try {
    const { data } = yield call(axios.post, 'http://localhost:5000/api/contacts', { name, phone, contactData });
    yield put(actions.initContactsSuccess({ data }));
  } catch (e) {
    yield put(actions.addContactError(e));
  }
}

function* searchContacts(action) {
  const { payload } = action;
  // const { name, phone, contactData } = payload;
  // {name: 'Vova', phone: '77777', contactData: 'UUD'}
  try {
    const { data } = yield call(axios.post, 'http://localhost:5000/api/contacts/search', { payload });
    yield put(actions.initContactsSuccess({ data }));
  } catch (e) {
    yield put(actions.addContactError(e));
  }
}

function* deleteContact(action) {
  const { payload } = action;
  try { // data: {id: '...' }
    const { data } = yield call(axios.delete, `http://localhost:5000/api/contacts/${payload}`, payload);
    yield put(actions.deleteContactSuccess(data));
  } catch (e) {
    yield put(actions.deleteContactError(e));
  }
}

function* editContact(action) {
  const {
    id, name, phone, contactData,
  } = action.payload;
  try {
    const { data } = yield call(axios.put, `http://localhost:5000/api/contacts/${id}`, { name, phone, contactData });
    yield put(actions.initContactsSuccess({ data }));
  } catch (e) {
    yield put(actions.editContactError(e));
  }
}

function* initContacts() {
  try {
    const { data } = yield call(axios.get, 'http://localhost:5000/api/contacts');
    yield put(actions.initContactsSuccess({ data }));
  } catch (e) {
    yield put(actions.initContactsError(e));
  }
}

export default function* contactSaga() {
  yield takeEvery(types.CREATE_CONTACT, addContact);
  yield takeEvery(types.DELETE_CONTACT, deleteContact);
  yield takeEvery(types.EDIT_CONTACT, editContact);
  yield takeEvery(types.SEARCH_CONTACT, searchContacts);
  yield takeEvery(types.INIT_CONTACT, initContacts);
}
