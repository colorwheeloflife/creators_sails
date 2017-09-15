import React, { Component } from 'react';

const ShopProfile = (props) => {
  const { profile } = props;

  const categories = profile.categories.map((category, index) => {
    const subcategories = profile.subcategories.map((subcategory, index) => {
      if ( subcategory.category_id === category.id ) {
        return (
          <div key={ subcategory.name } className='subcategory'>
             &nbsp;| { subcategory.name }
          </div>
        );
      }
    });

    return (
      <div key={ category.name } className='category_row'>
        <div className='category'>
          { category.name }
        </div>

        <div className='subcategories'>
          { subcategories }
        </div>
      </div>
    );
  });

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
          { categories }
        </div>

        <div className='location_container'>
          <div className='location current'>
            lives in: { profile.location }
          </div>

          <div className='location origin'>
            from: { profile.origin }
          </div>
        </div>

        <div className='description'>
          { profile.description }
        </div>

      </div>

      <div className='tag_container'>
      </div>
    </div>
  );
}

export default ShopProfile;


/*

const vibe_badges = profile.tags.map((tag, index) {
  if ( tag.type === 'vibe' && tag.badge === true ) {
    return (
      <VibeBadge tag={ tag } />
    );
  }
});

*/
