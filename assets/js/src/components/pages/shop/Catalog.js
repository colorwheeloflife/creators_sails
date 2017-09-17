import React, { Component } from 'react';

import Styler from '../../../lib/Styler';

import CatalogTagFilter from './CatalogTagFilter';
import Dropdown from '../../reusables/Dropdown';
import ItemCard from '../../reusables/ItemCard';
import Searchbar from '../../reusables/Searchbar';

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



const sort_by_options = [{
    name: 'relevance'
  },
  {
    name: 'most recent'
  }, 
  {
    name: 'highest rated'
  },
  {
    name: 'lowest price'
  },
  {
    name: 'highest price'
  },
  {
    name: 'a => z'
  },
  {
    name: 'z => a'
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

            <div className='catalog_searchbar_container'>
              <Searchbar />
            </div>

            <div className='sort_by_dropdown_container'>
              <Dropdown
                items={ sort_by_options }/>
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
