import React from 'react'

const ClothingSizingBar = (props) => (
	<div id="add_item_clothing_sizing_bar">

		<div className="clothing_sizing_field_addition_btn_container">
			<div name="before" className='clothing_sizing_field_addition_btn' onClick={props.handleClothingSizingInputAddition}>{props.options.indexOf('XXS') === -1 ? '+' : '-'}</div>
		</div>

		<div id="clothing_size_input_group">
			{props.options.map(option => {
				return (
					<div key={option} className={"clothing_size_input_container " + props.clothingInputGroupClass}>
						<label className="clothing_size_label">{option}</label>
						<input
							className="form-control clothing_size_input"
							name={option}
							type="text"
							onChange={props.handleClothingSizeCountChange} />
					</div>
				);
			})}
		</div>
		<div className="clothing_sizing_field_addition_btn_container">
			<div name="after" className='clothing_sizing_field_addition_btn' onClick={props.handleClothingSizingInputAddition}>{props.options.indexOf('XXL') === -1 ? '+' : '-'}</div>
		</div>
	</div>
);

export default ClothingSizingBar;


/*



*/
