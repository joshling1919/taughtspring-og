export const SessionConstants = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SIGNUP: "SIGNUP",
  RECEIVE_CURRENT_USER: "RECEIVE_CURRENT_USER",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",
  OPEN_LOGIN: "OPEN_LOGIN",
  CLOSE_LOGIN: "CLOSE_LOGIN",
  OPEN_SIGNUP: "OPEN_SIGNUP",
  CLOSE_SIGNUP: "CLOSE_SIGNUP"
};

export const signupAction = user => ({
  type: SessionConstants.SIGNUP,
  user
});

export const loginAction = user => ({
  type: SessionConstants.LOGIN,
  user
});

export const logoutAction = () => ({
  type: SessionConstants.LOGOUT
});

export const receiveCurrentUser = currentUser => ({
  type: SessionConstants.RECEIVE_CURRENT_USER,
  currentUser
});

export const openLogin = () => ({
  type: SessionConstants.OPEN_LOGIN
});

export const closeLogin = () => ({
  type: SessionConstants.CLOSE_LOGIN
});

export const openSignup = () => ({
  type: SessionConstants.OPEN_SIGNUP
});

export const closeSignup = () => ({
  type: SessionConstants.CLOSE_SIGNUP
});

export const receiveErrors = errors => ({
  type: SessionConstants.RECEIVE_ERRORS,
  errors
});
