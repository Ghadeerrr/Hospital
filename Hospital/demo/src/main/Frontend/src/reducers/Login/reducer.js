const initialState = {
  currentUser: {},
  isLoggedIn: false,
  UserType:"",
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOG_IN":
      return {
        currentUser: payload,
        isLoggedIn: true,
      };
    case "SET_TYPE":
      return {
        currentUser: state.currentUser,
        isLoggedIn: true,
        UserType: payload,
      };
    case "LOG_OUT":
      return {
        currentUser: {},
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default usersReducer;
