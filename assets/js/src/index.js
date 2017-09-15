import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import Popup from 'react-popup';

import App from './components/app';
import BasicAddItemPage from './components/pages/add_item/BasicAddItemPage';
import InventoryGamePad from './components/pages/inventory_gamepad/InventoryGamePad';
import Shop from './components/pages/shop/Shop';
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
        <Route path="basicadditem" component={BasicAddItemPage} />
        <Route path="inventory" component={InventoryGamePad} />
        <Route path="shop" component={Shop} />
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
