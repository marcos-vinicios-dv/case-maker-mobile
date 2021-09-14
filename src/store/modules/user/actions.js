export const signInUser = user => {
  return {
    type: '@user/SIGN_IN_USER',
    payload: {
      user,
    },
  };
};

export const logout = () => {
  return {
    type: '@user/LOGOUT',
    payload: {},
  };
};

export const updateUser = user => {
  return {
    type: '@user/UPDATE_USER',
    payload: {user},
  };
};
