import { getUserData, getAuthUser } from "../../api/api";

import actions from "../actions";

export const loadUserAsync = (id) => (dispatch) => {
  getUserData(id)
    .then((response) => dispatch(actions.loadUser(response)))
    .catch((error) => console.log(error));
};

export const getAuthUserAsync = () => (dispatch) => {
  getAuthUser()
    .then((response) => dispatch(actions.authUserAction(response)))
    .catch((error) => console.log(error));
};
