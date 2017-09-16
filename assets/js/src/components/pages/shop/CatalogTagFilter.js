import React, { Component } from 'react';

import Styler from '../../../lib/Styler';

import DropdownCheckboxes from '../../reusables/DropdownCheckboxes';

export default class CatalogTagFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }


  render() {
    const {  } = this.state;
    const { context, tags } = this.props;

    return (
      <div className='catalog_tag_filter'>
        <DropdownCheckboxes
          context={ context }
          items={ tags }
          size='small'/>
        <div className='tag_bin'>
          <div className='fake_tag'>• Tag</div>
          <div className='fake_tag'>• Tag</div>
          <div className='fake_tag'>• Tag</div>
          <div className='fake_tag'>• Tag</div>
        </div>
      </div>
    );
  }
}
