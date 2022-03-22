import * as types from '../types/user';

// Вход в профиль для старых пользователей
export const authUserStart = (payload) => ({
  type: types.AUTH_USER_START,
  payload,
});

export const authUserError = (payload) => ({
  type: types.AUTH_USER_ERROR,
  payload,
});

export const authUserSuccess = (payload) => ({
  type: types.AUTH_USER_SUCCESS,
  payload,
});

// Выход из профиля пользователя
export const logoutUserSuccess = () => ({
  type: types.LOGOUT_USER_SUCCESS,
});

export const logoutUserError = (payload) => ({
  type: types.LOGOUT_USER_ERROR,
  payload,
});

export const logoutUserStart = () => ({
  type: types.LOGOUT_USER_START,
});

// Проверка наличии сессии
export const checkAuthStart = (payload) => ({
  type: types.CHECK_AUTH_START,
  payload,
});

export const checkAuthSuccess = (payload) => ({
  type: types.CHECK_AUTH_SUCCESS,
  payload,
});

export const checkAuthError = (payload) => ({
  type: types.CHECK_AUTH_ERROR,
  payload,
});

// Регистрация новых пользователей
export const regUserSuccess = (payload) => ({
  type: types.REG_USER_SUCCESS,
  payload,
});

export const regUserError = (payload) => ({
  type: types.REG_USER_ERROR,
  payload,
});

export const regUserStart = (payload) => ({
  type: types.REG_USER_START,
  payload,
});
