import React from 'react'

const ArtSizingCardGroup = (props) => (
		<div className={props.groupClassName}>
			{props.options.map(option => {
				return (
          <div className={props.containerClassName} key={option}>
            <input
              id={props.id}
              className={props.inputLowendClassName}
              name={option}
              type="text"
              value={props.value[ props.options.indexOf(option) ][0]}
              onChange={props.handleSizingInputLowendChange} />
            <span className="range_measurement_X">X</span>
            <input
              id={props.id}
              className={props.inputHighendClassName}
              name={option}
              type="text"
              value={props.value[ props.options.indexOf(option) ][1]}
              onChange={props.handleSizingInputHighendChange} />
          </div>
				);
			})}
			<div id="add_item_art_sizing_input_addition_btn" onClick={props.handleSizingInputAddition}> + </div>
		</div>
);

export default ArtSizingCardGroup;
