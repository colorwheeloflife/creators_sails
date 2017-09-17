import React from 'react';

import Input from './Input';

function Searchbar(props) {
  const {  } = props;

	return (
		<div className='searchbar'>
      <div className='input_container'>
        <Input width='full'/>
      </div>
      <div className='searchbar_enter_button'>

      </div>
    </div>
	);
}

export default Searchbar;

/*

import { Link } from 'react-router-dom';

<Link to={`${item.link}`}>
</Link>

*/
