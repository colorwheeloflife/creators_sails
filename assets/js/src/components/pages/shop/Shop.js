import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../../../actions';

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

				<div className='profile'>

				</div>

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

<div className='shop_profile_picture'>
</div>

<div className='title'>
	Sew Much Love Clothing
</div>

<div className='tagline'>
	Clothing Made From The Heart
</div>

<div className='category_row'>
	<div className='categories'>
		Clothing Design
	</div>
	<div className='sub_categories'>
		Yoga-Wear
	</div>
</div>

<div className='location'>
	lives in: California
</div>

<div className='origin'>
	| from: California
</div>


*/
