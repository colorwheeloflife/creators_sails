import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../../../actions';

import ShopProfile from './ShopProfile';

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

				<div className='shelf feature'>
				</div>

				<div className='shelf'>
				</div>

				<div className='shelf'>
				</div>

				<div className='catologue'>
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

Shop = connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);

export default Shop;



/*




*/
