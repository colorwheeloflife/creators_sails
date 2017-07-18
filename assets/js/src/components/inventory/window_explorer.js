import React, { Component } from 'react';
import ItemSnapshot from './item_snapshot';

class WindowExplorer extends Component {

  renderItems() {
    return [
      <ItemSnapshot key={1}/>,
      <ItemSnapshot key={2}/>,
      <ItemSnapshot key={3}/>,
      <ItemSnapshot key={4}/>,
      <ItemSnapshot key={5}/>,
      <ItemSnapshot key={6}/>,
      <ItemSnapshot key={7}/>,
      <ItemSnapshot key={8}/>,
      <ItemSnapshot key={9}/>
    ];
  }

  render () {
		return (
      <div>
        <h1 className="inventory_gamepad_content_window_title"> Explorer </h1>
        {this.renderItems()}
      </div>
		);
	}
}

export default WindowExplorer;
