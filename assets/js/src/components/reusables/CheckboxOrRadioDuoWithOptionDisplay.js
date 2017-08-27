import React from 'react'

const CheckboxOrRadioDuoWithOptionDisplay = (props) => {
		return (
      <div
      id={props.id}
      className={props.inputClassName}  >
        <div className={props.divClassName}>
          <input
            className="checkbox_or_radio_duo_input"
            name={props.options[0]}
            onChange={props.controlFunc}
            value={props.options[0]}
            checked={props.selectedOptions.indexOf(props.options[0]) > -1}
            type={props.type} /> {props.options[0]}
        </div>
        <div className={props.divClassName}>
  				<input
            className="checkbox_or_radio_duo_input"
  					name={props.options[1]}
  					onChange={props.controlFunc}
  					value={props.options[1]}
  					checked={props.selectedOptions.indexOf(props.options[1]) > -1}
  					type={props.type} /> {props.options[1]}
  	    </div>
      </div>
		);
};

export default CheckboxOrRadioDuoWithOptionDisplay;
