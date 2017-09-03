import React, { Component } from 'react';

export default class InventoryInputGroup extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'large'],
    initial: PropTypes.number,
    size_inputs: PropTypes.number
  }

  constructor(props) {
    super(props);

    this.state = {
      count: props.initial || 1
    }
  }

  render() {
    return (
      <div className="inventory_input_group">

      </div>
    )
  }


}
