import React from 'react'

const CheckboxOrRadioWithOptionDisplay = (props) => {
		return (
	    <div className={props.divClassName}>
				<input
					id={props.id}
					className={props.inputClassName}
					name={props.options}
					onChange={props.controlFunc}
					value={props.options}
					checked={props.selectedOption > -1}
					type={props.type} />
	    </div>
		);
};

export default CheckboxOrRadioWithOptionDisplay; 
