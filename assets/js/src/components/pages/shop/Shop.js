import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../../../actions';

import ShopProfile from './ShopProfile';
import Shelf from './ShopShelf';
import Catalog from './Catalog';

const shop_example = {
	name: 'Sew Much Love Clothing',
	tagline: 'Clothing Made From The Heart',
	categories: [{
		id: 3,
		name: 'Clothing Design'
	}],
	subcategories: [{
		name: 'Yoga-Wear',
		category_id: 3
	}],
	location: 'Lake Tahoe, California',
	origin: 'California',
	description: 'Sew Much Love is a clothing company that believes in fashion and function, with every purchase a dollar will be donated to a non-profit here in Lake Tahoe.',
	tags: [{
		name: 'Sacred Nomad',
		type: 'vibe',
		badge: true
	},{
		name: 'Sexyness',
		type: 'vibe',
		badge: true
	},{
		name: 'Gypsy',
		type: 'standard'
	},{
		name: 'Pretty',
		type: 'standard'
	},{
		name: 'Comfy',
		type: 'standard'
	}]
}

const items_example = [{
		name: 'Spirit Tree',
		artist: 'TheSpiritNectar',
		price: 280,
		currency: 'CA'
	},
	{
		name: 'Spirit Tree',
		artist: 'TheSpiritNectar',
		price: 280,
		currency: 'CA'
	},
	{
		name: 'Spirit Tree',
		artist: 'TheSpiritNectar',
		price: 280,
		currency: 'CA'
	},
	{
		name: 'Spirit Tree',
		artist: 'TheSpiritNectar',
		price: 280,
		currency: 'CA'
	},
	{
		name: 'Spirit Tree',
		artist: 'TheSpiritNectar',
		price: 280,
		currency: 'CA'
	},
	{
		name: 'Spirit Tree',
		artist: 'TheSpiritNectar',
		price: 280,
		currency: 'CA'
	},
	{
		name: 'Spirit Tree',
		artist: 'TheSpiritNectar',
		price: 280,
		currency: 'CA'
	},
	{
		name: 'Spirit Tree',
		artist: 'TheSpiritNectar',
		price: 280,
		currency: 'CA'
	},
	{
		name: 'Spirit Tree',
		artist: 'TheSpiritNectar',
		price: 280,
		currency: 'CA'
	},
	{
		name: 'Spirit Tree',
		artist: 'TheSpiritNectar',
		price: 280,
		currency: 'CA'
	}
];


class Shop extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

  render() {
    return (
      <div id='shop'>
				<div className='banner'>
				</div>

				<ShopProfile
					profile={ shop_example }/>

				<Shelf
					title='Featured'
					items= { items_example }
					feature={ true }/>

				<Shelf
					title='Sexyness'
					items= { items_example }/>

				<Shelf
					title='Swag'
					items= { items_example }/>

				<Catalog
					items={ items_example }/>

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

Shop = connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);

export default Shop;



/*




*/
