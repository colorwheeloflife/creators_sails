import React from 'react';

import Styler from '../../lib/styler';

function Checkbox(props) {
  const { item, index, checked, onSelect } = props;

  const itemClass = Styler(
    'item'
  );

  return (
    <div className={ itemClass }>
      <input
        className='checkbox'
        name={ item.name }
        value={ index }
        type='checkbox'
        checked={ checked }
        onChange={ onSelect }/>
      <label
        className='name'
        onClick={ onSelect }>
        { item.name }
      </label>
    </div>
  )
}

export default Checkbox;
