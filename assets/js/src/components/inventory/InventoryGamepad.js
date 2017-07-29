import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

import Select from 'react-select';
import MultiSelectField from '../form/multiselect';
import WindowExplorer from './window_explorer';
import GamePadAddItemForm from './GamePadAddItemForm';

const CATEGORIES = [
	{ label: 'Visual Art', value: 'visual_art' },
	{ label: 'Clothing', value: 'clothing' },
	{ label: 'Accessories', value: 'accessories' },
	{ label: 'Jewelry', value: 'jewelry' },
	{ label: 'Instruments', value: 'instruments' },
	{ label: 'Crystals', value: 'crystals' },
];

const TYPES = [
	{ label: 'Visual Art', value: 'visual_art' },
	{ label: 'Clothing', value: 'clothing' },
	{ label: 'Accessories', value: 'accessories' },
	{ label: 'Jewelry', value: 'jewelry' },
	{ label: 'Instruments', value: 'instruments' },
	{ label: 'Crystals', value: 'crystals' },
];

const COLORS = [
	{ label: 'Visual Art', value: 'visual_art' },
	{ label: 'Clothing', value: 'clothing' },
	{ label: 'Accessories', value: 'accessories' },
	{ label: 'Jewelry', value: 'jewelry' },
	{ label: 'Instruments', value: 'instruments' },
	{ label: 'Crystals', value: 'crystals' },
];

const MATERIALS = [
	{ label: 'Visual Art', value: 'visual_art' },
	{ label: 'Clothing', value: 'clothing' },
	{ label: 'Accessories', value: 'accessories' },
	{ label: 'Jewelry', value: 'jewelry' },
	{ label: 'Instruments', value: 'instruments' },
	{ label: 'Crystals', value: 'crystals' },
];


class InventoryGamepad extends Component {

	constructor(props) {
		super(props);
		this.state = {
			// items: this.props.items,
			windowAddItem: false,
			windowExplorer: true
		}

		this.onAddItemClick = this.onAddItemClick.bind(this);
		this.onExploreClick = this.onExploreClick.bind(this);
		this.submit = this.submit.bind(this);
	}

	componentDidMount() {
		// this.props.actions.fetchItems();
	}

	onAddItemClick() {
	  const { windowAddItem } = this.state;
	  this.setState({
	    windowAddItem: windowAddItem ? true : true,
	    windowExplorer: windowAddItem ? false : false
	  });
	}

	onExploreClick() {
	  const { windowExplorer } = this.state;
	  this.setState({
	    windowAddItem: windowExplorer ? false : false,
	    windowExplorer: windowExplorer ? true : true
	  });
	}

	submit = (values) => {
		console.log(values);

  }

  render() {
    return (
      <div id="inventory_gamepad">
        <div id="inventory_gamepad_header">
          <button id="inventory_gamepad_back_to_shop_btn" className="btn inventory_gamepad_header_btn">Back To Shop</button>
          <button id="inventory_gamepad_explore_inventory_btn" className="btn btn-primary inventory_gamepad_header_btn" onClick={this.onExploreClick}> Explore Inventory </button>
          <button id="inventory_gamepad_add_item_btn" className="btn btn-primary inventory_gamepad_header_btn" onClick={this.onAddItemClick}> Add Item </button>
        </div>
        <div id="inventory_gamepad_menu_bar">
          <div id="inventory_gamepad_menu_bar_title">Filter Content:</div>

          <div className="inventory_gamepad_menu_bar_selection">
            <MultiSelectField
              label="Categories"
              options={CATEGORIES}
              placeholder="Select categories"
            />
          </div>

          <div className="inventory_gamepad_menu_bar_selection">
            <MultiSelectField
              label="Types"
              options={TYPES}
              placeholder="Select types"
            />
          </div>

          <div className="inventory_gamepad_menu_bar_selection">
            <MultiSelectField
              label="Colors"
              options={COLORS}
              placeholder="Select colors"
            />
          </div>

          <div className="inventory_gamepad_menu_bar_selection">
            <MultiSelectField
              label="Materials"
              options={MATERIALS}
              placeholder="Select materials"
            />
          </div>
        </div>
        <div id="inventory_gamepad_content_container">
          <div id="inventory_gamepad_content_tabs_container">
            <div className="btn btn-primary inventory_gamepad_content_tabs"> Published </div>
            <div className="btn btn-primary inventory_gamepad_content_tabs"> Sale </div>
            <div className="btn btn-primary inventory_gamepad_content_tabs"> Hidden </div>
            <div className="btn btn-primary inventory_gamepad_content_tabs"> Drafts </div>
          </div>
          <div id="inventory_gamepad_content_searchbar">
            <input id="inventory_gamepad_content_searchbar_input" placeholder="Search inventory here..."/>
            <button id="inventory_gamepad_content_searchbar_btn" className="btn btn-success">Go!</button>
          </div>

          <div id="inventory_gamepad_content_window">
						<WindowExplorer
							isShowing={this.state.windowExplorer} />
						<GamePadAddItemForm
							isShowing={this.state.windowAddItem}
							onSubmit={this.submit} />
					</div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
  testing: state.testing
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

InventoryGamepad = connect(
  mapStateToProps,
  mapDispatchToProps
)(InventoryGamepad);

export default InventoryGamepad;
