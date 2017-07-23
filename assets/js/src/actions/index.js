import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  BASIC_ADD_ITEM,
  FETCH_ITEMS
} from './types';

const ROOT_URL = 'http://localhost:1337';

export function basicAddItem(values, callback) {

  console.log('before dispatch');
  console.log(values);

  return (dispatch) => {
    console.log('pre-actions');
    axios.post(`${ROOT_URL}/item`, {
      name: values.name,
      description: values.description
    })
      .then(response => {
        console.log('actions');
        console.log(response);
        dispatch({
          type: BASIC_ADD_ITEM,
          payload: response.data
        });
        browserHistory.push('/feature');
      })
      .catch(error => {
        console.log(error);
        // dispatch(authError(response.data.error));
      });
  }
}

export function fetchItems() {
  return (dispatch) => {
    console.log('pre-actions');
    axios.get(`/item`)
      .then(response => {
        console.log(response);
        dispatch({
          type: FETCH_ITEMS,
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error);
        // dispatch(authError(response.data.error));
      });
  }
}
