import React from 'react'

const IndividualCheckboxWithOptionDisplay = (props) => (
	return (
    <div key={option}  className={props.divClassName}>
			<input
				id={props.id}
				className={props.inputClassName}
				name={option}
				onChange={props.controlFunc}
				value={option}
				checked={props.selectedOptions.indexOf(option) > -1}
				type={props.type} /> {option}
    </div>
	);
);

export default IndividualCheckboxWithOptionDisplay;
