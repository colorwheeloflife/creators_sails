import axios from 'axios';
import {
  BASIC_ADD_ITEM,
  FETCH_ITEMS
} from './types';

const ROOT_URL = 'http://localhost:1337';

export function basicAddItem(values, callback) {
  console.log(values);
  const request = axios.post('/item', {
      name: values.name,
      description: values.description,
      price: values.price
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  return {
    type: BASIC_ADD_ITEM,
    payload: request
  }
}

export function fetchItems() {
  const request = axios.get(`/item`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  // return (dispatch) => {
  //   request.then(({data}) => {
  //     dispatch({type: FETCH_ITEMS, payload: data })
  //   });
  // };

  return {
    type: FETCH_ITEMS,
    payload: request
  };
}
