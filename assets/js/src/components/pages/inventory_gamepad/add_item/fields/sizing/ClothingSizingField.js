import React from 'react'

import ClothingSizingBar from './pieces/ClothingSizingBar';
import CheckboxOrRadioWithoutOptionDisplay from '../../../../../reusables/CheckboxOrRadioWithOptionDisplay';

const ClothingSizingField = (props) => (
		<div id="clothing_sizing_field" className={'' + (props.selectedCategory.indexOf('Clothing') > -1 ? 'show' : 'hidden')}>

			<div id="add_item_clothing_sizing_bar">
				<ClothingSizingBar
					options={props.clothingSizingOptions}
					handleClothingSizeCountChange={props.handleClothingSizeCountChange}
					handleClothingSizingInputAddition={props.handleClothingSizingInputAddition}
					clothingInputGroupClass={props.clothingInputGroupClass}
					/>
			</div>

			<div id="add_item_clothing_pricing_container">
				<div className="add_item_clothing_inventory_price_container">
					<input
						className="add_item_clothing_inventory_price_input"
						type="text"
						value={props.clothingInventoryPrice}
						onChange={props.handleInventoryPriceChange} />
					<label className="add_item_clothing_inventory_on_sale_checkbox_label" htmlFor="item_on_sale">On Sale?</label>
					<CheckboxOrRadioWithoutOptionDisplay
							id=""
							divClassName="checkbox-group add_item_clothing_inventory_on_sale_checkbox_container"
							inputClassName="form-checkbox add_item_clothing_inventory_on_sale_checkbox"
							controlFunc={props.handleClothingItemOnSaleSelection}
							type={'checkbox'}
							selectedOption={props.clothingItemOnSaleDeclarations} />
					<input
						className={"add_item_clothing_inventory_price_input add_item_clothing_inventory_sale_price_input " + (props.clothingItemOnSaleDeclarations ? 'show' : 'hidden')}
						type="text"
						value={props.clothingInventorySalePrice}
						onChange={props.handleInventoryClothingSalePriceChange} />
				</div>
			</div>

    </div>
);

export default ClothingSizingField;
