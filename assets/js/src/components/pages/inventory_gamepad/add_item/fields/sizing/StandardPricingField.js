import React from 'react'
import CurrencyInput from 'react-currency-input';
import CheckboxOrRadioWithoutOptionDisplay from '../../../../../reusables/CheckboxOrRadioWithoutOptionDisplay';

const StandardPricingField = (props) => (
    <div className="add_item_standard_pricing_container">
      <div className="add_item_standard_pricing_input_container">
        <CurrencyInput
          prefix="$"
          className="add_item_standard_inventory_price_input"
          type="text"
          value={"$ " + props.price}
          onChange={props.handlePriceChange} />
        <label className="add_item_standard_inventory_on_sale_checkbox_label" htmlFor="item_on_sale">On Sale?</label>
        <CheckboxOrRadioWithoutOptionDisplay
            id=""
            divClassName="checkbox-group add_item_standard_inventory_on_sale_checkbox_container"
            inputClassName="form-checkbox add_item_standard_inventory_on_sale_checkbox"
            controlFunc={props.handleOnSaleSelection}
            type={'checkbox'}
            selectedOption={props.itemOnSaleDeclaration} />
        <CurrencyInput
          prefix="$"
          className={"add_item_standard_inventory_price_input add_item_standard_inventory_sale_price_input " + (props.itemOnSaleDeclaration ? 'show' : 'hidden')}
          type="text"
          value={props.salePrice}
          onChange={props.handleSalePriceChange} />
      </div>
    </div>
);

export default StandardPricingField;
