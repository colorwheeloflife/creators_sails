import React from 'react'

const TagGroup = (props) => (
	<div id={props.id} className={props.groupClassName}>
		{props.options.map(option => {
			return (
				<div key={option}
	          className={props.className}
						name={option}
						value={option} >
          {option}
          <div className={props.closerClassName} onClick={ () => props.onTagDeleteClick(option) }> x </div>
				</div>
			);
		})}
	</div>
);

export default TagGroup;


/*

id="add_item_subcategory_tag_container"
containerClassName="add_item_tag_container"


*/
