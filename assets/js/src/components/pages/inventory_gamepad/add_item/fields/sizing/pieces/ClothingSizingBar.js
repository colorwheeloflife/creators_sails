import React from 'react'

const ClothingSizingBar = (props) => (
	<div id="clothing_size_input_group">
		<div name="before" className={'clothing_sizing_field_addition_btn ' + (props.options.indexOf('XXS') === -1 ? 'show' : 'hidden')} onClick={props.handleClothingSizingInputAddition}> + </div>
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
		<div name="after" className={'clothing_sizing_field_addition_btn ' + (props.options.indexOf('XXL') === -1 ? 'show' : 'hidden')} onClick={props.handleClothingSizingInputAddition}> + </div>
	</div>
);

export default ClothingSizingBar;


/*



*/
