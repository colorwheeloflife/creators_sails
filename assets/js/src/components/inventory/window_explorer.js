import React, { Component } from 'react';
import ItemSnapshot from './item_snapshot';

class WindowExplorer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={ this.props.isShowing ? "" : "hidden" }>
        <h1 className="inventory_gamepad_content_window_title"> Explorer </h1>

      </div>
		);
  }

}

export default WindowExplorer;



// renderItems() {
//   return [
//     <ItemSnapshot key={1}/>,
//     <ItemSnapshot key={2}/>,
//     <ItemSnapshot key={3}/>,
//     <ItemSnapshot key={4}/>,
//     <ItemSnapshot key={5}/>,
//     <ItemSnapshot key={6}/>,
//     <ItemSnapshot key={7}/>,
//     <ItemSnapshot key={8}/>,
//     <ItemSnapshot key={9}/>
//   ];
// }

// {this.renderItems()}
