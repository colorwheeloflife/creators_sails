import React from 'react'

const CheckboxOrRadioWithoutOptionDisplay = (props) => {
		return (
	    <div className={props.divClassName}>
				<input
					id={props.id}
					className={props.inputClassName}
					name={props.options}
					onChange={props.controlFunc}
					value={props.selectedOptions}
					checked={props.selectedOptions}
					type={props.type} />
	    </div>
		);
};

export default CheckboxOrRadioWithoutOptionDisplay;
