import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  AUTH_SESSION_EMAIL,
  UNAUTH_SESSION_EMAIL,
  SET_USER_ID,
  FETCH_USER
} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case UNAUTH_SESSION_EMAIL:
      return { ...state, current_user: '' };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case FETCH_MESSAGE:
      return { ...state, message: action.payload };
    // case SET_USER_ID:
    //   console.log('message heard');
    //   return { ...state, current_user_id: action.payload };
    case FETCH_USER:
      return { ...state, current_user: action.payload };
  }

  return state;
}
