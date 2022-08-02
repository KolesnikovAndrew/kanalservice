import getUserData from "../../api/api";

import actions from "../actions";

export const loadUserAsync = () => (dispatch) => {
  getUserData(2)
    .then((response) => dispatch(actions.loadUser(response)))
    .catch((error) => console.log(error));
};
