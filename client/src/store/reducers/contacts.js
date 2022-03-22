import * as types from '../types/contacts';

export default function contactReducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case types.CREATE_CONTACT: {
      const newState = { ...state };
      newState.loading = true;
      newState.error = null;
      return newState;
    }

    case types.CREATE_CONTACT_SUCCESS: {
      const newState = { ...state };
      newState.loading = false;
      newState.error = null;
      newState.data = [...newState.data, payload.data];
      return newState;
    }

    case types.CREATE_CONTACT_ERROR: {
      const newState = { ...state };
      newState.loading = false;
      newState.error = payload;
      return newState;
    }

    case types.DELETE_CONTACT: {
      const newState = { ...state };
      newState.loading = true;
      newState.error = null;
      return newState;
    }

    case types.DELETE_CONTACT_SUCCESS: {
      const newState = { ...state };
      newState.loading = false;
      newState.error = null;
      newState.data = newState.data.filter((contact) => contact.id !== Number(payload.id));
      return newState;
    }

    case types.DELETE_CONTACT_ERROR: {
      const newState = { ...state };
      newState.loading = false;
      newState.error = payload;
      return newState;
    }

    case types.INIT_CONTACT: {
      const newState = { ...state };
      newState.loading = true;
      newState.error = null;
      return newState;
    }

    case types.INIT_CONTACT_ERROR: {
      const newState = { ...state };
      newState.loading = false;
      newState.error = payload;
      return newState;
    }

    case types.INIT_CONTACT_SUCCESS: {
      const newState = { ...state };
      newState.loading = false;
      newState.error = null;
      newState.data = payload.data;
      return newState;
    }

    case types.EDIT_CONTACT: {
      const newState = { ...state };
      newState.loading = true;
      newState.error = null;
      return newState;
    }

    case types.EDIT_CONTACT_ERROR: {
      const newState = { ...state };
      newState.loading = false;
      newState.error = payload;
      return newState;
    }

    case types.SEARCH_CONTACT_ERROR: {
      const newState = { ...state };
      newState.loading = false;
      newState.error = payload;
      return newState;
    }

    default: {
      return state;
    }
  }
}
