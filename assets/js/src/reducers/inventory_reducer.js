import {
  BASIC_ADD_ITEM,
  FETCH_ITEMS
} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case BASIC_ADD_ITEM:
      return { ...state, error: '', item: payload };
    case FETCH_ITEMS:
      return { ...state, error: '', items: payload };
  }

  return state;
}
