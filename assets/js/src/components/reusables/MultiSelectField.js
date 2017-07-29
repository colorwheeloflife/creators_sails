import React, { Component } from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';

class MultiSelectField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      label: props.label,
      options: props.options,
      placeholder: props.placeholder,
      value: []
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange (value) {
		this.setState({ value });
	}

  render () {
		return (
			<div className="section">
				<h6 className="section-heading">{this.state.label}</h6>
				<Select
          multi
          simpleValue
          disabled={this.state.disabled}
          value={this.state.value}
          placeholder={this.state.placeholder}
          options={this.state.options}
          onChange={this.handleSelectChange}
          />
			</div>
		);
	}
}

export default MultiSelectField;
