import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form';
import * as actions from '../../../actions';

import InventoryGamePadExplorer from './explorer/InventoryGamePadExplorer';
import InventoryGamePadAddItemForm from './add_item/InventoryGamePadAddItemForm';

class InventoryGamepad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addItem: false,
      explorer: true
    }
  }

  handleAddItemClick = () => {
	  const { windowAddItem } = this.state;
	  this.setState({
	    windowAddItem: windowAddItem ? true : true,
	    windowExplorer: windowAddItem ? false : false
	  });
	}

	handleExploreClick = () => {
	  const { windowExplorer } = this.state;
	  this.setState({
	    windowAddItem: windowExplorer ? false : false,
	    windowExplorer: windowExplorer ? true : true
	  });
	}

  render() {
    return (
      <div id="inventory_gamepad">
        <div className="header">
          <button
            className="btn navigation_btn"
            onClick={}>
            Back To Shop
          </button>
          <button
            className="btn navigation_btn"
            onClick={this.handleExploreClick}>
            Explore Inventory
          </button>
          <button
            className="btn navigation_btn"
            onClick={this.handleAddItemClick}>
            Add Item
          </button>
        </div>

        <div id="side_panel"></div>

        <div id="content_window">
          <InventoryExplorer
            isShowing={this.state.windowExplorer}/>
          <InventoryAddItem
            isShowing={this.state.windowaddItem}
            addItem={this.props.actions.addItem}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

InventoryGamePad = connect(
  mapStateToProps,
  mapDispatchToProps
)(InventoryGamePad);

export default InventoryGamepad;
