import React from 'react'

const CheckboxOrRadioGroup = (props) => (
	<div className={props.groupClassName}>
		<div className={props.divClassName}>
			{props.options.map(option => {
				return (
					<label key={option} className={props.labelClassName}>
						<input
							id={props.id}
							className={props.inputClassName}
							name={option}
							onChange={props.controlFunc}
							value={option}
							checked={props.selectedOptions.indexOf(option) > -1}
							type={props.type} /> {option}
					</label>
				);
			})}
		</div>
	</div>
);

export default CheckboxOrRadioGroup;
