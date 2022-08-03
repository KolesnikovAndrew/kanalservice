import actionTypes from "./actionTypes";

export const loadUser = (data) => ({
  type: actionTypes.USER_LOAD_SUCCESS,
  payload: data,
});

export const authUserAction = (data) => ({
  type: actionTypes.GET_AUTH_USER,
  payload: data,
});

export const login = () => ({
  type: actionTypes.LOGIN,
});
export const logout = () => ({
  type: actionTypes.LOGOUT,
});

export default {
  loadUser,
  authUserAction,
  login,
  logout,
};
