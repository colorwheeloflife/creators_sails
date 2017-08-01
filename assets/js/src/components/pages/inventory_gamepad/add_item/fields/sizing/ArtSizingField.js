import React from 'react'

import ArtSizingCardGroup from './pieces/ArtSizingCardGroup';

const ArtSizingField = (props) => (
	<div id="art_sizing_field" className={'' + (props.selectedCategory.indexOf('Visual Art') > -1 ? 'show' : 'hidden')}>
		<div id="add_item_art_sizing_measurement_unit_dropdown" onClick={props.handleSizingInputDropdownOpen}>{props.artSizingUnit}</div>
		<div id="add_item_art_sizing_measurement_unit_dropdown_menu" className={'' + (props.artSizingUnitDropdownOpen ? 'show' : 'hidden')}>
			<li className="add_item_art_sizing_measurement_unit_dropdown_list_item" onClick={props.handleSizingUnitSelection}>inches</li>
			<li className="add_item_art_sizing_measurement_unit_dropdown_list_item" onClick={props.handleSizingUnitSelection}>feet</li>
			<li className="add_item_art_sizing_measurement_unit_dropdown_list_item" onClick={props.handleSizingUnitSelection}>centimeters</li>
			<li className="add_item_art_sizing_measurement_unit_dropdown_list_item" onClick={props.handleSizingUnitSelection}>meters</li>
		</div>

		<ArtSizingCardGroup
			groupClassName="add_item_art_sizing_input_group"
			containerClassName="add_item_art_sizing_input_container"
			inputLowendClassName="form control add_item_art_sizing_input add_item_art_sizing_lowend_input"
			inputHighendClassName="form control add_item_art_sizing_input add_item_art_sizing_highend_input"
			name="sizing"
			type="text"
			options={props.artSizingTracker}
			value={props.artSizingInput}
			handleSizingInputLowendChange={props.handleSizingInputLowendChange}
			handleSizingInputHighendChange={props.handleSizingInputHighendChange}
			handleSizingInputDropdownOpen={props.handleSizingInputDropdownOpen}
			handleSizingInputAddition={props.handleSizingInputAddition}
			/>
	</div>
);

export default ArtSizingField;
