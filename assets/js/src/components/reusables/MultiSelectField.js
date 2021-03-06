import React, { Component } from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';

const MultiSelectField = (props) => {
  return (
    <div className="section">
      <h6 className="section-heading">{props.label}</h6>
      <Select
        multi
        simpleValue
        value={props.value}
        placeholder={props.placeholder}
        options={props.options}
        onChange={props.handleSelectChange}
        />
    </div>
  );
};


export default MultiSelectField;
