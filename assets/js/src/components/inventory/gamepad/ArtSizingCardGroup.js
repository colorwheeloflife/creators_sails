import React from 'react'

const ArtSizingCardGroup = (props) => (
		<div className={props.groupClassName}>
			{props.options.map(option => {
				return (
          <div className={props.containerClassName} key={option}>
            <input
              id={props.id}
              className={props.inputClassName}
              name={option}
              type="text"
              value={props.value[props.value.indexOf(option)]}
              onChange={props.handleSizingInputChange} />
          </div>
				);
			})}
		</div>
);

export default ArtSizingCardGroup;
