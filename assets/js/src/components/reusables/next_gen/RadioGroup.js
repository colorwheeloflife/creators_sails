import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styler from '../../../lib/styler';

export default class RadioGroup extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'large']),
    label: PropTypes.string,
    items: PropTypes.array.isRequired,
    initial: PropTypes.number,
    orientation: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      selected: props.initial || null
    }
  }

  handleSelect = (index) => {
    console.log(index);
    this.setState({ selected: index });
  }

  render() {
    const { selected } = this.state;
    const { label, items, size, orientation, children } = this.props;

    const radioGroupClass = Styler(
      'radio_group',
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

    const radioItems = items.map((item, index) => {
      return (
        <div
          className="item"
          key={item.name}>
          <input
            className="radio"
            name={item.name}
            value={index}
            type="radio"
            checked={selected === index}
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
      <div className={ radioGroupClass }>
        <div className={ labelClass }>
          { label }
        </div>
        <div className={ itemsClass }>
          { radioItems }
        </div>
      </div>
    )
  }
}
