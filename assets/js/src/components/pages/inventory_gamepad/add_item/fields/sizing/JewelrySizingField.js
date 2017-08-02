import React from 'react'

import JewelrySizingCardGroup from './pieces/JewelryBraceletSizingCardGroup';

const JewelrySizingField = (props) => (
		<div id="jewelry_sizing_field" className={'' + (props.selectedCategory.indexOf('Jewelry') > -1 ? 'show' : 'hidden')}>
			<JewelrySizingCardGroup
				groupClassName="add_item_jewelry_sizing_input_group"
				containerClassName="add_item_jewelry_sizing_input_container"
				inputClassName="form control add_item_jewelry_sizing_input"
				name="sizing"
				type="text"
				options={props.jewelrySizingTracker}
				value={props.jewelrySizingInput}
				handleJewelrySizingInputChange={props.handleJewelrySizingInputChange}
				handleJewelrySizingInputAddition={props.handleJewelrySizingInputAddition}
				/>
    </div>
);

export default JewelrySizingField;
