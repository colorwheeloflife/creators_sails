import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styler from '../../lib/Styler';

export default class Input extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    width: PropTypes.oneOf(['full'])
  };

  constructor(props) {
    super(props);

    this.state = {
      value: ""
    }
  }

  handleInput = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    const { name, placeholder, width } = this.props;

    const inputClass = Styler(
      'input',
      width
    );

    return (
      <input
        className={ inputClass }
        name={ name }
        placeholder={ placeholder }
        value={ value }
        onChange={ this.handleInput }/>
    )
  }
}
