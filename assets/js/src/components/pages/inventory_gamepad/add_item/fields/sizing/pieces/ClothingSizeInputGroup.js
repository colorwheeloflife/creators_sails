import React from 'react'

const ClothingSizeInputGroup = (props) => (
	<div id="clothing_size_input_group">
		{props.options.map(option => {
			return (
				<div key={option} className="clothing_size_input_container">
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
);

export default ClothingSizeInputGroup;


/*



*/
