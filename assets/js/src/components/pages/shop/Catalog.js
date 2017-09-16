import React, { Component } from 'react';

import Styler from '../../../lib/Styler';

import CatalogTagFilter from './CatalogTagFilter';
import ItemCard from '../../reusables/ItemCard';

const tags_example = [{
    name: 'gypsy'
  },
  {
    name: 'pretty'
  },
  {
    name: 'comfy'
  },
  {
    name: 'sexyness'
  }
];

export default class Catalog extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }


  render() {
    const {  } = this.state;
    const { items } = this.props;

    const catalogItems = items.map((item, index) => {
      const properties = {
        item
      };

      return (
        <ItemCard key={ index } { ...properties } />
      );
    });

    return (
      <div className='catalog'>

        <div className='col_1'>

          <div className='top_row'>
            <div className='catalog_title'>
              Items
            </div>
          </div>


          <div className='catalog_menu'>
            <div className='filter_title'>
              Create a filter to find items
            </div>

            <CatalogTagFilter
              context= { 'Category' }
              tags={ tags_example }/>

            <CatalogTagFilter
              context= { 'Subcategory' }
              tags={ tags_example }/>

            <CatalogTagFilter
              context= { 'Vibe' }
              tags={ tags_example }/>

          </div>
        </div>


        <div className='col_2'>

          <div className='top_row'>
            <div className='catalog_button'>
              Something
            </div>
            <div className='catalog_button'>
              Something
            </div>
            <div className='catalog_button'>
              Something
            </div>
          </div>

          <div className='catalog_content'>
            { catalogItems }
          </div>
        </div>

      </div>
    );
  }
}




/*



*/
