import React from 'react'

const CheckboxOrRadioGroup = (props) => (
	<div>
		<div id={props.id} className="checkbox-group">
			{props.options.map(option => {
				return (
					<label key={option} className="form-label capitalize">
						<input
							className="form-checkbox"
							name={option}
							value={option}
							type={props.type} />
					</label>
				);
			})}
		</div>
	</div>
);

export default CheckboxOrRadioGroup;
