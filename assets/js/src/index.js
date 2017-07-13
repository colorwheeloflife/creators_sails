import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import Popup from 'react-popup';

import App from './components/app';
import StoreAddItem from './components/inventory/add_item/add_item_wizard_form';
import StoreAddItemP1 from './components/inventory/add_item/new_item_p1';
import StoreAddItemP2 from './components/inventory/add_item/new_item_p2';
import StoreAddItemP3 from './components/inventory/add_item/new_item_p3';
import Feature from './components/feature';
import Welcome from './components/welcome';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="store_additem" component={StoreAddItem} />
        <Route path="store_additem/p1" component={StoreAddItemP1} />
        <Route path="store_additem/p2" component={StoreAddItemP2} />
        <Route path="store_additem/p3" component={StoreAddItemP3} />
        <Route path="feature" component={Feature} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.app'));

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
