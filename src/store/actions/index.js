import actionTypes from "./actionTypes";

export const loadUser = (data) => ({
  type: actionTypes.USER_LOAD_SUCCESS,
  payload: data,
});

export default {
  loadUser,
};
