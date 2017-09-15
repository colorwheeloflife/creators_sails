import React, { Component } from 'react';


function ItemCard(props) {
  const { item } = props;

	return (
		<div className='item_card'>

      <div className='item_card_display'></div>
      <div className='item_card_info'>
        <div className='item_card_name'>
          { item.name }
        </div>

        <div className='item_card_collection_btns_container'>
          <div
            className='item_card_collection_btn'
            name='item_card_collection_like_btn'>

          </div>
          <div
            className='item_card_collection_btn'
            name='item_card_collection_heart_btn'>

          </div>
          <div
            className='item_card_collection_btn'
            name='item_card_collection_star_btn'>

          </div>
        </div>

        <div className='item_card_artist'>
          { item.artist }
        </div>

        <div className='item_card_price'>
          { item.currency }
          $
          { item.price }
        </div>

      </div>
    </div>
	);
}

export default ItemCard;

/*

import { Link } from 'react-router-dom';

<Link to={`${item.link}`}>
</Link>

*/
