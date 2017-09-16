import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styler from '../../lib/styler';
import Checkbox from './Checkbox';

export default class CheckboxGroup extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    label: PropTypes.string,
    orientation: PropTypes.oneOf(['horizontal'])
  };

  constructor(props) {
    super(props);

    this.state = {
      selected: []
    }
  }

  handleSelect = (index) => {
    const { selected } = this.state;

    this.setState({
      selected: selected.indexOf(index) === -1 ? [ ...selected, index ] : selected.filter(element => element !== index)
    });
  }

  render() {
    const { selected } = this.state;
    const { label, items, orientation } = this.props;

    const labelClass = Styler(
      'checkbox_label',
      label ? null : 'hidden'
    );

    const itemsClass = Styler(
      'checkbox_items',
      orientation
    );

    const itemClass = Styler(
      'checkbox_item',
      orientation
    );

    const checkboxes = items.map((item, index) => {
      const properties = {
        key: item.name,
        orientation,
        item,
        checked: selected.indexOf(index) > -1,
        onSelect: event => this.handleSelect(index)
      };

      return <Checkbox { ...properties } />
    });

    return (
      <div className='checkbox_group'>
        <div className={ labelClass }>
          { label }
        </div>
        <div className={ itemsClass }>
          { checkboxes }
        </div>
      </div>
    )
  }
}
