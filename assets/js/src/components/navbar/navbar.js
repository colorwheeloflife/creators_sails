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
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Navbar);
