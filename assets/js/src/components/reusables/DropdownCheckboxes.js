import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styler from '../../lib/styler';

import CheckboxGroup from './CheckboxGroup';

export default class DropdownCheckboxes extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'large']),
    items: PropTypes.array.isRequired,
    initial: PropTypes.number
  };

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      selected: []
    }
  }

  handleOpen = () => {
    this.setState({ open: !this.state.open });
  }

  handleSelect = (index) => {
    this.setState({
      selected: selected.indexOf(index) === -1 ? [ ...selected, index ] : selected.filter(element => element !== index)
    });
  }

  render() {
    const { open, selected } = this.state;
    const { context, items, size } = this.props;

    const dropdownClass = Styler(
      'dropdown',
      size
    );

    const headerClass = Styler(
      'dropdown_header',
      size
    );

    const itemsClass = Styler(
      'dropdown_list',
      open ? null : 'hidden',
      size
    );

    return (
      <div className={ dropdownClass }>
        <div
          className={ headerClass }
          onClick={ this.handleOpen } >
          { context }
        </div>
        <div className={ itemsClass }>
          <CheckboxGroup
            items={ items }/>
        </div>
      </div>
    )
  }
}
