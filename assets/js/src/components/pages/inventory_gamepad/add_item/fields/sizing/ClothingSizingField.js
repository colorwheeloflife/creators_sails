import React from 'react'
import CurrencyInput from 'react-currency-input';
import ClothingSizingBar from './pieces/ClothingSizingBar';
import StandardPricingField from './StandardPricingField';
import CheckboxOrRadioWithoutOptionDisplay from '../../../../../reusables/CheckboxOrRadioWithoutOptionDisplay';

const ClothingSizingField = (props) => (
		<div id="clothing_sizing_field" className={'' + (props.selectedCategory.indexOf('Clothing') > -1 ? 'show' : 'hidden')}>

			<div id="add_item_clothing_sizing_bar_container">
				<ClothingSizingBar
					options={props.clothingSizingOptions}
					handleClothingSizeCountChange={props.handleClothingSizeCountChange}
					handleClothingSizingInputAddition={props.handleClothingSizingInputAddition}
					clothingInputGroupClass={props.clothingInputGroupClass}
					/>
			</div>


				<StandardPricingField
					price={props.clothingInventoryPrice}
					salePrice={props.clothingInventorySalePrice}
					itemOnSaleDeclaration={props.clothingItemOnSaleDeclarations}

					handlePriceChange={props.handleInventoryClothingPriceChange}
					handleSalePriceChange={props.handleInventoryClothingSalePriceChange}
					handleOnSaleSelection={props.handleClothingItemOnSaleSelection}
					/>
    </div>
);

export default ClothingSizingField;



/*




<div className="add_item_clothing_inventory_price_container">
	<CurrencyInput
		prefix="$"
		className="add_item_clothing_inventory_price_input"
		type="text"
		value={props.clothingInventoryPrice}
		onChange={props.handleInventoryClothingPriceChange} />
	<label className="add_item_clothing_inventory_on_sale_checkbox_label" htmlFor="item_on_sale">On Sale?</label>
	<CheckboxOrRadioWithoutOptionDisplay
			id=""
			divClassName="checkbox-group add_item_clothing_inventory_on_sale_checkbox_container"
			inputClassName="form-checkbox add_item_clothing_inventory_on_sale_checkbox"
			controlFunc={props.handleClothingItemOnSaleSelection}
			type={'checkbox'}
			selectedOption={props.clothingItemOnSaleDeclarations} />
	<CurrencyInput
		prefix="$"
		className={"add_item_clothing_inventory_price_input add_item_clothing_inventory_sale_price_input " + (props.clothingItemOnSaleDeclarations ? 'show' : 'hidden')}
		type="text"
		value={props.clothingInventorySalePrice}
		onChange={props.handleInventoryClothingSalePriceChange} />
</div>


<CheckboxOrRadioGroup
		id="add_item_use_as_description_checkbox"
		divClassName="checkbox-group add_item_clothing_inventory_on_sale_checkbox_container"
		labelClassName="form-label capitalize"
		inputClassName="form-checkbox add_item_clothing_inventory_on_sale_checkbox"
		controlFunc={this.handleClothingItemOnSaleSelection}
		type={'checkbox'}
		options={props.falseness}
		selectedOptions={this.state.clothingItemOnSaleDeclarations} />







*/
