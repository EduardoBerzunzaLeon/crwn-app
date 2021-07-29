import userActionTypes from './user.types';

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
});

export const googleSignInSuccess = (user) => ({
  type: userActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

export const googleSingInFailure = (errorMessage) => ({
  type: userActionTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: errorMessage,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const emailSignInSuccess = (user) => ({
  type: userActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user,
});

export const emailSingInFailure = (errorMessage) => ({
  type: userActionTypes.EMAIL_SIGN_IN_FAILURE,
  payload: errorMessage,
});
