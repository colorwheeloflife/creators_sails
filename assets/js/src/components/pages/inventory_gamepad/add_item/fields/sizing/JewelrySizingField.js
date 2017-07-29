import React from 'react'

const JewelrySizingField = (props) => (
		<div id="jewelry_sizing_field" className={'' + (props.selectedCategory.indexOf('Jewelry') > -1 ? 'show' : 'hidden')}>

    </div>
);

export default JewelrySizingField;
