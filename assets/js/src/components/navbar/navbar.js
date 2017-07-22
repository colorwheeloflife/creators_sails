import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link, Redirect } from 'react-router';
import Popup from 'react-popup';
import { fetchUser } from '../../actions';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-default" id="creators_navbar">
        <Link to="/" className="navbar-brand">West Coast Creator Collective</Link>

        <button id="nav_inventory_btn" className="btn btn-primary nav-item">
          <Link className="nav-link" to="/inventory">Inventory</Link>
        </button>

        <button id="nav_inventory_btn" className="btn btn-primary nav-item">
          <Link className="nav-link" to="/basicadditem">Add</Link>
        </button>

      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Navbar);
