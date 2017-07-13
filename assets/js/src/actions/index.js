import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  AUTH_SESSION_EMAIL,
  UNAUTH_SESSION_EMAIL,
  SET_USER_ID,
  FETCH_USER
} from './types';

const ROOT_URL = 'http://localhost:1137';

// export function signinUser({ email, password }) {
//   return function(dispatch) {
//     // Submit email/password to the server
//     axios.post(`${ROOT_URL}/signin`, { email, password })
//       .then(response => {
//         // If request is good...
//         // - Update state to indicate user is authenticated
//         dispatch({ type: AUTH_USER });
//         // - Update state to save the current user
//         // dispatch({
//         //       type: SET_USER_ID,
//         //       payload: response.data.user_id
//         //      });
//         // console.log(response.data);
//         // console.log(response.data.user_id);
//         // - Save the JWT token
//         localStorage.setItem('token', response.data.token);
//         // - redirect to the route '/feature'
//         browserHistory.push('/feature');
//       })
//       .catch(() => {
//         // If request is bad...
//         // - Show an error to the user
//         dispatch(authError('Bad Login Info'));
//       });
//   }
// }
//
// export function signupUser({ first_name, last_name, username, email, location, dob, gender, password }) {
//   return function(dispatch) {
//     axios.post(`${ROOT_URL}/signup`, { first_name, last_name, username, email, location, dob, gender, password })
//       .then(response => {
//         dispatch({ type: AUTH_USER });
//         dispatch({
//           type: AUTH_SESSION_EMAIL,
//           payload: email
//          });
//         localStorage.setItem('token', response.data.token);
//         browserHistory.push('/feature');
//       })
//       .catch(response => dispatch(authError(response.data.error)));
//   }
// }
//
// export function authError(error) {
//   return {
//     type: AUTH_ERROR,
//     payload: error
//   };
// }
//
// export function signoutUser() {
//   localStorage.removeItem('token');
//
//   return function(dispatch) {
//     dispatch({ type: UNAUTH_USER });
//     dispatch({ type: UNAUTH_SESSION_EMAIL });
//   }
// }
//
// export function fetchMessage() {
//   return function(dispatch) {
//     axios.get(ROOT_URL, {
//       headers: { authorization: localStorage.getItem('token') }
//     })
//       .then(response => {
//         dispatch({
//           type: FETCH_MESSAGE,
//           payload: response.data.message
//         });
//       });
//   }
// }
