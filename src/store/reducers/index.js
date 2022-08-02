import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoading: true,
  isAuth: false,
  posts: [],
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: state.posts.concat([action.payload]),
      };

    default:
      return state;
  }
};

export default AppReducer;
