import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import Popup from 'react-popup';

import App from './components/app';
import BasicAddItem from './components/inventory/basic_add_item';
import AddItemPage from './components/inventory/AddItemPage';
import InventoryGamepad from './components/inventory/inventory_gamepad';
import Feature from './components/feature';
import Welcome from './components/welcome';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="additem" component={AddItemPage} />
        <Route path="inventory" component={InventoryGamepad} />
        <Route path="feature" component={Feature} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#app'));

ReactDOM.render(
  <Popup
    className="mm-popup"
    btnClass="mm-popup__btn"
    closeBtn={true}
    closeHtml={null}
    defaultOk="Ok"
    defaultCancel="Cancel"
    wildClasses={false}
    closeOnOutsideClick={true}/>,
  document.getElementById('popupContainer')
);
