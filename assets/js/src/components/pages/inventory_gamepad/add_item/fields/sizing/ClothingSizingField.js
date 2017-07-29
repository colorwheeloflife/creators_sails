import React from 'react'

const ClothingSizingField = (props) => (
		<div id="clothing_sizing_field" className={'' + (props.selectedCategory.indexOf('Clothing') > -1 ? 'show' : 'hidden')}>

    </div>
);

export default ClothingSizingField;
