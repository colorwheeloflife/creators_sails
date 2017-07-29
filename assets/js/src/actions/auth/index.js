import axios from 'axios';

export function basicAddItem(values, callback) {
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
