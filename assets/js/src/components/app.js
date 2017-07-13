import React from 'react';
import { Component } from 'react';

import Navbar from './navbar/navbar';
import Popup from 'react-popup';

export default class App extends Component {
  render() {
    return (
      <div id='app_div'>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
