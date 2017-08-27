import React from 'react'

import ArtInventoryCardGroup from './pieces/ArtInventoryCardGroup';

const ArtInventoryField = (props) => (
	<div id="art_inventory_field" className={'' + (props.selectedCategory.indexOf('Visual Art') > -1 ? 'show' : 'hidden')}>

		<ArtInventoryCardGroup
			groupClassName="add_item_art_inventory_input_group"
			cardClassName="add_item_art_inventory_card"
			inputLowendClassName="form control add_item_art_inventory_input add_item_art_inventory_lowend_input"
			inputHighendClassName="form control add_item_art_inventory_input add_item_art_inventory_highend_input"
			name="inventory"
			type="text"
			options={props.artInventoryTracker}
			sizingValue={props.artInventoryInput}
			quantityValue={props.artInventoryQuantity}
			priceValue={props.artInventoryPrice}
			salePriceValue={props.artInventorySalePrice}
			itemOnSaleTracker={props.itemOnSaleTracker}
			itemOnSaleDeclarations={props.itemOnSaleDeclarations}
			handleInventoryInputLowendChange={props.handleInventoryInputLowendChange}
			handleInventoryInputHighendChange={props.handleInventoryInputHighendChange}
			handleInventoryQuantityChange={props.handleInventoryQuantityChange}
			handleInventoryPriceChange={props.handleInventoryPriceChange}
			handleInventorySalePriceChange={props.handleInventorySalePriceChange}
			handleItemOnSaleSelection={props.handleItemOnSaleSelection}
			handleArtInventoryCardAdditionOrDeletion={props.handleArtInventoryCardAdditionOrDeletion}
			/>
	</div>
);

export default ArtInventoryField;




/*

<ArtInventoryCardGroup
	groupClassName="add_item_art_inventory_input_group"
	containerClassName="add_item_art_inventory_input_container"
	inputLowendClassName="form control add_item_art_inventory_input add_item_art_inventory_lowend_input"
	inputHighendClassName="form control add_item_art_inventory_input add_item_art_inventory_highend_input"
	name="inventory"
	type="text"
	options={props.artInventoryTracker}
	value={props.artInventoryInput}
	handleInventoryInputLowendChange={props.handleInventoryInputLowendChange}
	handleInventoryInputHighendChange={props.handleInventoryInputHighendChange}
	handleInventoryInputDropdownOpen={props.handleInventoryInputDropdownOpen}
	handleInventoryInputAddition={props.handleInventoryInputAddition}
	/>




*/
