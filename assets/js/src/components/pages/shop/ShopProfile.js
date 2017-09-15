import React, { Component } from 'react';

const ShopProfile = (props) => {
  const { profile } = props;

  return (
    <div className='shop_profile'>
      <div className='shop_profile_picture'>
      </div>

      <div className='shop_info'>
        <div className='title'>
          { profile.name }
        </div>

        <div className='tagline'>
          { profile.tagline }
        </div>

        <div className='category_container'>

        </div>

        <div className='location_container'>
          <div className='location current'>
            lives in: { profile.location }
          </div>

          <div className='location origin'>
            from: { profile.origin }
          </div>
        </div>

      </div>

      <div className='tag_container'>

      </div>
    <div>
  );
}

export default ShopProfile;


/*

const categories = profile.categories.map((category, index) {
  const subcategories = profile.subcategories.map((subcategory, index) {
    if ( subcategory.category_id === category.id ) {
      return (
        <div className='subcategory'>
          | { subcategory.name }
        </div>
      );
    }
  });

  return (
    <div className='category_row'>
      <div className='category'>
        { category }
      </div>

      <div className='subcategories'>
        { subcategories }
      </div>
    </div>
  );
});

*/
