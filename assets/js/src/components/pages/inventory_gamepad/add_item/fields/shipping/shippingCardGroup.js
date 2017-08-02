import React from 'react'

const ShippingCardGroup = (props) => (
		<div className={props.groupClassName}>
			{props.options.map(option => {
				return (
          <div className={props.containerClassName} key={option}>
            <label className={props.labelClassName}>{option}</label>
            <input
              className={props.inputOneItemClassName}
              name={option}
              type="text"
              value={props.value[ props.options.indexOf(option) ][0]}
              onChange={props.handleOneItemShippingCost} />
            <input
              className={props.inputAdditionalItemsClassName}
              name={option}
              type="text"
              value={props.value[ props.options.indexOf(option) ][1]}
              onChange={props.handleEachAdditionalItemShippingCost} />
          </div>
				);
			})}
			<div id="add_item_art_sizing_input_addition_btn" onClick={props.handleAdditionalShippingDestination}> + </div>
		</div>
);

export default ShippingCardGroup;
