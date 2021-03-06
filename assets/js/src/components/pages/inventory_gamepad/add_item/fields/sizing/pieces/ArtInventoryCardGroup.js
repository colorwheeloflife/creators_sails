import React from 'react'
import CurrencyInput from 'react-currency-input';
import CheckboxOrRadioWithoutOptionDisplay from '../../../../../../reusables/CheckboxOrRadioWithoutOptionDisplay';

const ArtInventoryCardGroup = (props) => (
		<div className={props.groupClassName}>
			<span id="add_item_art_inventory_column_inventory_titlehead">Inventory</span> <br></br>
			<span id="add_item_art_inventory_column_sizing_title" className="add_item_art_inventory_column_title">Sizes</span>
			<span id="add_item_art_inventory_column_pricing_title" className="add_item_art_inventory_column_title">Price</span>
			<span id="add_item_art_inventory_column_quantity_title" className="add_item_art_inventory_column_title">Quantity</span>
			{props.options.map(option => {
				return (
					<div key={option}>
						<div className={props.cardClassName}>
							<div className="add_item_art_inventory_sizing_inputs_container">
								<input
		              className={props.inputLowendClassName}
		              name={option}
		              type="text"
									placeholder="height"
		              value={props.sizingValue[ props.options.indexOf(option) ][0]}
		              onChange={props.handleInventoryInputLowendChange} />
		            <span className="range_measurement_X">X</span>
		            <input
		              className={props.inputHighendClassName}
		              name={option}
		              type="text"
									placeholder="width"
		              value={props.sizingValue[ props.options.indexOf(option) ][1]}
		              onChange={props.handleInventoryInputHighendChange} />
							</div>

							<div className="add_item_art_inventory_price_container">

								<CurrencyInput
									prefix="$"
		              className="add_item_art_inventory_price_input"
		              name={option}
		              type="text"
		              value={props.priceValue[ props.options.indexOf(option) ]}
		              onChangeEvent={props.handleInventoryPriceChange} />

								<label className="add_item_art_inventory_on_sale_checkbox_label" htmlFor="item_on_sale">On Sale?</label>
								<CheckboxOrRadioWithoutOptionDisplay
										id=""
										divClassName="checkbox-group add_item_art_inventory_on_sale_checkbox_container"
										inputClassName="form-checkbox add_item_art_inventory_on_sale_checkbox"
										controlFunc={props.handleItemOnSaleSelection}
										type={'checkbox'}
										options={props.itemOnSaleTracker}
										selectedOption={props.itemOnSaleDeclarations[props.itemOnSaleDeclarations.indexOf(option)]} />

								<CurrencyInput
									prefix="$"
									className={"add_item_art_inventory_price_input add_item_art_inventory_sale_price_input " + (props.itemOnSaleDeclarations.indexOf(option) > -1 ? 'show' : 'hidden')}
									name={option}
									type="text"
									value={props.salePriceValue[ props.options.indexOf(option) ]}
									onChange={props.handleInventorySalePriceChange} />
							</div>

							<div className="add_item_art_inventory_quantity_input_container">
								<input
		              className="add_item_art_inventory_quantity_input"
		              name={option}
		              type="text"
									placeholder="#"
		              value={props.quantityValue[ props.options.indexOf(option) ]}
		              onChange={props.handleInventoryQuantityChange} />
							</div>
	          </div>
						<div
							className="add_item_art_inventory_input_deletion_btn"
							name={option}
							onClick={props.handleArtInventoryCardAdditionOrDeletion} >
							-
						</div>
					</div>
				);
			})}
			<div className="add_item_art_inventory_input_addition_btn" onClick={props.handleArtInventoryCardAdditionOrDeletion}>+</div>
		</div>
);

export default ArtInventoryCardGroup;


/*

<input
	className="add_item_art_inventory_price_input"
	name={option}
	type="text"
	value={"$ " + props.priceValue[ props.options.indexOf(option) ]}
	onChange={props.handleInventoryPriceChange} />

	<input
		className={"add_item_art_inventory_price_input add_item_art_inventory_sale_price_input " + (props.itemOnSaleDeclarations.indexOf(option) > -1 ? 'show' : 'hidden')}
		name={option}
		type="text"
		value={"$ " + props.salePriceValue[ props.options.indexOf(option) ]}
		onChange={props.handleInventorySalePriceChange} />

*/
