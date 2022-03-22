import * as types from '../types/contacts';

export const addContact = (payload) => ({
  type: types.CREATE_CONTACT,
  payload,
});

export const addContactError = (payload) => ({
  type: types.CREATE_CONTACT_ERROR,
  payload,
  error: true,
});

export const addContactSuccess = (payload) => ({
  type: types.CREATE_CONTACT_SUCCESS,
  payload,
});

export const deleteContact = (payload) => ({
  type: types.DELETE_CONTACT,
  payload,
});

export const deleteContactError = (payload) => ({
  type: types.DELETE_CONTACT_ERROR,
  payload,
  error: true,
});

export const deleteContactSuccess = (payload) => ({
  type: types.DELETE_CONTACT_SUCCESS,
  payload,
});

export const initContacts = () => ({
  type: types.INIT_CONTACT,
});

export const initContactsError = (payload) => ({
  type: types.INIT_CONTACT_ERROR,
  payload,
  error: true,
});

export const initContactsSuccess = (payload) => ({
  type: types.INIT_CONTACT_SUCCESS,
  payload,
});

export const editContact = (payload) => ({
  type: types.EDIT_CONTACT,
  payload,
});

export const editContactSuccess = (payload) => ({
  type: types.EDIT_CONTACT_SUCCESS,
  payload,
});

export const editContactError = (payload) => ({
  type: types.EDIT_CONTACT_ERROR,
  payload,
  error: true,
});

export const searchContacts = (payload) => ({
  type: types.SEARCH_CONTACT,
  payload,
});

export const searchContactsError = (payload) => ({
  type: types.SEARCH_CONTACT_ERROR,
  payload,
  error: true,
});
