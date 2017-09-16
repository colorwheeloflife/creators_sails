import React, { Component } from 'react';

import Styler from '../../../lib/Styler';

export default class Catalog extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }


  render() {
    const {  } = this.state;
    const { items } = this.props;

    return (
      <div className='catalog'>

        <div className='col_1'>

          <div className='top_row'>
            <div className='catalog_title'>
              Items
            </div>
          </div>


          <div className='catalog_menu'>

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

          </div>
        </div>

      </div>
    );
  }
}




/*



*/
