import React from 'react';

import Styler from '../../../lib/Styler';

import ItemCard from '../../reusables/ItemCard';

const ShopShelf = (props) => {
  const { title, items, feature } = props;

  const shelfContainerClass = Styler(
    'shelf_container',
    feature ? 'feature' : ''
  );

  const shelfItems = items.map((item, index) => {
    const properties = {
      item
    };

    return (
      <ItemCard key={ index } { ...properties } />
    );
  });



  return (
    <div className={ shelfContainerClass }>
      <div className='shelf_title'>
        { title }
      </div>
      <div className='shelf'>
        { shelfItems }
        <div className='tabletop'></div>
      </div>
    </div>
  );
}

export default ShopShelf;
