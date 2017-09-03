import React from 'react'

const TagGroup = (props) => (
	<div className="tag_group">
		{props.list.map(tag => {
			return (
				<div
					className="tag"
					key={ tag }
					name={ tag }
					value={ tag } >
					{ tag }
					<div
						className="delete"
						onClick={ props.delete() }>
						x
					</div>
				</div>
			)
		})}
	</div>
);

export default TagGroup;
