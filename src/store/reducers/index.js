import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoading: true,
  isAuth: false,
  posts: [],
  authUser: "",
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: state.posts.concat([action.payload]),
      };
    case actionTypes.GET_AUTH_USER:
      return {
        ...state,
        authUser: action.payload,
      };
    case actionTypes.LOGIN:
      return {
        ...state,
        isAuth: true,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};

export default AppReducer;
