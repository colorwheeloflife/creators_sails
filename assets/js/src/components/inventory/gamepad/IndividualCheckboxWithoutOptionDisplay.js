import React from 'react'

const IndividualCheckboxWithoutOptionDisplay = (props) => {
		return (
	    <div className={props.divClassName}>
				<input
					id={props.id}
					className={props.inputClassName}
					name={props.options}
					onChange={props.controlFunc}
					value={props.options}
					checked={props.selectedOptions.indexOf(props.options) > -1}
					type={props.type} />
	    </div>
		);
};

export default IndividualCheckboxWithoutOptionDisplay;
