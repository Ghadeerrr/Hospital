export const login = (user) => {
  // user: is an array of objects
  return {
    type: "LOG_IN",
    payload: user,
  };
};

export const UserType = (type) => {
  // user: is an String 
  return {
    type: "SET_TYPE",
    payload: type,
  };
};

export const logout = (user) => {
  // user: is an array of objects
  return {
    type: "LOG_OUT",
    payload: user,
  };
};
