import React from 'react'

import ArtInventoryCardGroup from './pieces/ArtInventoryCardGroup';

const ArtInventoryField = (props) => (
	<div id="art_inventory_field" className={'' + (props.selectedCategory.indexOf('Visual Art') > -1 ? 'show' : 'hidden')}>
		<div id="add_item_art_inventory_measurement_unit_dropdown" onClick={props.handleInventoryUnitInputDropdownOpen}>{props.artInventoryUnit}</div>

		<div id="add_item_art_inventory_measurement_unit_dropdown_menu" className={'' + (props.artInventoryUnitDropdownOpen ? 'show highlight': 'hidden')}>

			{props.measurementUnits.map(measurement => {
				return (
					<li key={measurement} className="add_item_art_inventory_dropdown_list_item" onClick={props.handleInventoryUnitSelection}>{measurement}</li>
				);
			})}

		</div>
		<div id="add_item_art_inventory_currency_unit_dropdown" onClick={props.handleInventoryCurrencyInputDropdownOpen}>{props.artInventoryCurrency}</div>
		<div id="add_item_art_inventory_currency_unit_dropdown_menu" className={'' + (props.artInventoryCurrencyDropdownOpen ? 'show highlight' : 'hidden')}>
			{props.currencies.map(currency => {
				return (
					<li key={currency} className="add_item_art_inventory_dropdown_list_item" onClick={props.handleInventoryCurrencySelection}>{currency}</li>
				);
			})}
		</div>

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

			handleArtInventoryCardAddition={props.handleArtInventoryCardAddition}
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
