import React from 'react'

const JewelrySizingCardGroup = (props) => (
		<div className={props.groupClassName}>
			{props.options.map(option => {
				return (
          <div className={props.containerClassName} key={option}>
            <input
              id={props.id}
              className={props.inputClassName}
              name={option}
              type="text"
              value={props.value[ props.options.indexOf(option) ][0]}
              onChange={props.handleJewelrySizingInputChange} />
          </div>
				);
			})}
			<div id="add_item_jewelry_sizing_input_addition_btn" onClick={props.handleJewelrySizingInputAddition}> + </div>
		</div>
);

export default JewelrySizingCardGroup;
