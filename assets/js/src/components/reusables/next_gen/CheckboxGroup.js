import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styler from '../../../lib/styler';

export default class CheckboxGroup extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'large']),
    label: PropTypes.string,
    items: PropTypes.array.isRequired,
    orientation: PropTypes.string,
    columns: PropTypes.number
  };

  constructor(props) {
    super(props);

    this.state = {
      selected: []
    }
  }

  handleSelect = (e) => {
    const checked = target.type === 'checkbox' ? target.checked : target.value;
    const name = e.target.name;
    var selected = this.state.selected;

    if (checked) {
      selected.push(index);
    } else {
      var index = selected.indexOf(name);
      selected.splice(index, 1);
    }

    this.setState({ selected });
  }

  render() {
    const { selected } = this.state;
    const { label, items, size, orientation, children } = this.props;

    const checkboxGroupClass = Styler(
      'checkbox_group',
      size
    );

    const labelClass = Styler(
      label ? null : 'hidden',
      size
    );

    const itemsClass = Styler(
      'items',
      size
    );

    const checkboxItems = items.map((item, index) => {
      return (
        <div
          className="item"
          key={item.name}>
          <input
            className="checkbox"
            name={index}
            value={index}
            type="checkbox"
            checked={selected.indexOf(index) > -1}
            onChange={event => this.handleSelect(index)}
            />
          <label
            className="name"
            key={item.name}>
            {item.name}
          </label>
        </div>
      )
    });

    return (
      <div className={ checkboxGroupClass }>
        <div className={ labelClass }>
          { label }
        </div>
        <div className={ itemsClass }>
          { checkboxItems }
        </div>
      </div>
    )
  }
}
