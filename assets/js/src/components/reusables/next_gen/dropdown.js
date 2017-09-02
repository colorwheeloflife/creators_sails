import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styler from '../../../lib/styler';

export default class Dropdown extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'large']),
    items: PropTypes.array.isRequired,
    initial: PropTypes.number
  };

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      selected: props.initial || 0
    }
  }

  handleOpen = () => {
    this.setState({ open: !this.state.open });
  }

  handleSelect = (index) => {
    this.setState({
      selected: index,
      open: false
    });
  }

  render() {
    const { open, selected } = this.state;
    const { items, size, children } = this.props;

    const dropdownClass = Styler(
      'dropdown',
      size
    );

    const headerClass = Styler(
      'header',
      size
    );

    const itemsClass = Styler(
      open ? null : 'hidden',
      size
    );

    const dropdownItems = items.map((item, index) => {
      return (
        <div
          className="item"
          key={ item.name }
          onClick={ event => this.handleSelect(index) }>
          { item.name }
        </div>
      )
    });

    return (
      <div className={ dropdownClass }>
        <div
          className={ headerClass }
          onClick={ this.handleOpen } >
          { items[selected].name }
        </div>
        <div className={ itemsClass }>
          { dropdownItems }
        </div>
      </div>
    )
  }
}
