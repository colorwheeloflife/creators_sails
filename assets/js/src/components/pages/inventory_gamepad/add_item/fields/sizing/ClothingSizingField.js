import React from 'react'

import ClothingSizeInputGroup from './pieces/ClothingSizeInputGroup';

const ClothingSizingField = (props) => (
		<div id="clothing_sizing_field" className={'' + (props.selectedCategory.indexOf('Clothing') > -1 ? 'show' : 'hidden')}>

			<div id="add_item_clothing_sizing_bar">
				<ClothingSizeInputGroup
					options={props.clothingSizingOptions}
					handleClothingSizeCountChange={props.handleClothingSizeCountChange}
					handleClothingSizingInputAddition={props.handleClothingSizingInputAddition}
					clothingInputGroupClass={props.clothingInputGroupClass}
					/>
			</div>


    </div>
);

export default ClothingSizingField;
