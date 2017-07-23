import {
  BASIC_ADD_ITEM,
  FETCH_ITEMS
} from '../actions/types';

export default function(state = {testing: '1234'}, action) {
  switch(action.type) {
    case BASIC_ADD_ITEM:
      console.log('reducer');
      console.log(action.payload);
      return { ...state, error: '', item: action.payload };
    case FETCH_ITEMS:
      console.log('reducer');
      console.log(action.payload);
      return { ...state, error: '', items: action.payload };
  }

  return state;
}
