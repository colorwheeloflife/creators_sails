import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
  // componentWillMount() {
  //   this.props.fetchMessage();
  // }

  render() {
    return (
      <div>KICK ASS FEATURE BITCHES!</div>
    );
  }
}

function mapStateToProps(state) {
}

export default connect(mapStateToProps, actions)(Feature);
