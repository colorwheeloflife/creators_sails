import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form-6';
import inventoryReducer from './inventory_reducer';

const rootReducer = combineReducers({
  form,
  inventory: inventoryReducer
});

export default rootReducer;
