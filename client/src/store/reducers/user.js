import * as types from '../types/user';

export default function usersReducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case types.AUTH_USER_SUCCESS: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.user = { ...payload };
      return newState;
    }
    case types.LOGOUT_USER_SUCCESS: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.user = null;
      return newState;
    }
    case types.CHECK_AUTH_SUCCESS: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.user = { ...payload };
      return newState;
    }
    case types.REG_USER_SUCCESS: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.user = { ...payload };
      return newState;
    }

    default: {
      return state;
    }
  }
}
