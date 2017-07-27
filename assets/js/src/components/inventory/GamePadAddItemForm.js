import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { Scrollbars } from 'react-custom-scrollbars';


import CheckboxOrRadioGroup from './gamepad/CheckboxOrRadioGroup';
import TagGroup from './gamepad/TagGroup';
import ArtSizingCardGroup from './gamepad/ArtSizingCardGroup';

var trueness = [true];
var CATEGORIES = ['Visual Art', 'Clothing', 'Accessories', 'Jewelry', 'Instruments', 'Totems'];
var ARTICLE_TYPES = ['Tops', 'Bottoms', 'Vests', 'Tutus'];
var SUBCATEGORIES = ['Acrylic', 'Digital Art', 'Fingerpaint', 'Wood Craftsmanship', 'Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8', 'Option 9', 'Option 10', 'Option 11', 'Option 12', 'Option 13', 'Option 14', 'Option 15' ];


class GamePadAddItemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
			useAsDescription: [true],
			selectedCategory: [],
			selectedArticleTypes: [],

      subCategoryDropdownOpen: false,

      subCategoryInputValue: "",
      subCategoryTagSelections: [],

      artSizingTracker: ["1"],
      artSizingCount: 1,
      artSizingInput: [["height", "width"]],
      artSizingUnitDropdownOpen: false,
      artSizingUnit: "Unit"
		}

    this.handleUseAsDescriptionSelection = this.handleUseAsDescriptionSelection.bind(this);
		this.handleAddItemCategorySelection = this.handleAddItemCategorySelection.bind(this);
		this.handleAddItemArticleSelection = this.handleAddItemArticleSelection.bind(this);

    this.handleSubcategoryDropdownOpen = this.handleSubcategoryDropdownOpen.bind(this);
    this.handleSubcategoryInputChange = this.handleSubcategoryInputChange.bind(this);
    this.handleSubCategoryInputKeyPress = this.handleSubCategoryInputKeyPress.bind(this);
    this.handleSubcategoryInputTagSelection = this.handleSubcategoryInputTagSelection.bind(this);
    this.handleSubcategoryDropdownTagCheckboxSelection = this.handleSubcategoryDropdownTagCheckboxSelection.bind(this);
    this.onSubCategoryTagDeleteClick = this.onSubCategoryTagDeleteClick.bind(this);
    this.handleSizingInputLowendChange = this.handleSizingInputLowendChange.bind(this);
    this.handleSizingInputHighendChange = this.handleSizingInputHighendChange.bind(this);
    this.handleSizingInputDropdownOpen = this.handleSizingInputDropdownOpen.bind(this);
    this.handleSizingUnitSelection = this.handleSizingUnitSelection.bind(this);
    this.handleSizingInputAddition = this.handleSizingInputAddition.bind(this);
  }


  handleUseAsDescriptionSelection(e) {
		const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

		var useAsDescription = this.state.useAsDescription;

		if (value) {
      useAsDescription = [true];
    } else {
      useAsDescription = [false];
    }

		this.setState({ useAsDescription });
	}


	handleAddItemCategorySelection(e) {
		this.setState({ selectedCategory: e.target.value });
	}


	handleAddItemArticleSelection(e) {
		const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

		var selectedArticleTypes = this.state.selectedArticleTypes;

		if (value) {
      selectedArticleTypes.push(name);
    } else {
      var index = selectedArticleTypes.indexOf(name);
      selectedArticleTypes.splice(index, 1);
    }

		this.setState({ selectedArticleTypes });
	}


  handleSubcategoryDropdownOpen(e) {
    const subCategoryDropdownOpen = this.state.subCategoryDropdownOpen;
    if (subCategoryDropdownOpen) {
      this.setState({ subCategoryDropdownOpen: false });
    } else {
      this.setState({ subCategoryDropdownOpen: true });
    }
  }


  handleSubcategoryInputChange(e) {
    const value = e.target.value;

    this.setState({ subCategoryInputValue: value });
  }


  handleSubcategoryInputTagSelection(e) {
    var tag = this.state.subCategoryInputValue;
    var subCategoryTagSelections = this.state.subCategoryTagSelections;
    subCategoryTagSelections.push(tag);

    this.setState({ subCategoryTagSelections });
    this.setState({ subCategoryInputValue: "" });
  }

  handleSubCategoryInputKeyPress(e){
    if (e.key === 'Enter') {
      var tag = this.state.subCategoryInputValue;
      var subCategoryTagSelections = this.state.subCategoryTagSelections;
      subCategoryTagSelections.push(tag);

      this.setState({ subCategoryTagSelections });
      this.setState({ subCategoryInputValue: "" });
    }
  }


  handleSubcategoryDropdownTagCheckboxSelection(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

		var subCategoryTagSelections = this.state.subCategoryTagSelections;

		if (value) {
      subCategoryTagSelections.push(name);
    } else {
      var index = subCategoryTagSelections.indexOf(name);
      subCategoryTagSelections.splice(index, 1);
    }

		this.setState({ subCategoryTagSelections });
  }

  onSubCategoryTagDeleteClick(t) {
    var subCategoryTagSelections = this.state.subCategoryTagSelections;
    var index = subCategoryTagSelections.indexOf(t);
    subCategoryTagSelections.splice(index, 1);

    this.setState({ subCategoryTagSelections });
  }


  handleSizingInputLowendChange(e) {
    var value = e.target.value;
    var token = e.target.name;

    var artSizingInput = this.state.artSizingInput;
    var artSizingTracker = this.state.artSizingTracker;
    var index = artSizingTracker.indexOf(token);

    artSizingInput[index][0] = value;

    this.setState({ artSizingInput });
    console.log(this.state.artSizingInput);
  }

  handleSizingInputHighendChange(e) {
    var value = e.target.value;
    var token = e.target.name;

    var artSizingInput = this.state.artSizingInput;
    var artSizingTracker = this.state.artSizingTracker;
    var index = artSizingTracker.indexOf(token);

    artSizingInput[index][1] = value;

    this.setState({ artSizingInput });
    console.log(this.state.artSizingInput);
  }

  handleSizingInputDropdownOpen(e) {
    var artSizingUnitDropdownOpen = this.state.artSizingUnitDropdownOpen;
    if (artSizingUnitDropdownOpen) {
      artSizingUnitDropdownOpen = false;
    } else {
      artSizingUnitDropdownOpen = true;
    }

    this.setState({ artSizingUnitDropdownOpen });
  }

  handleSizingUnitSelection(e) {
    var artSizingUnit = e.target.innerHTML;
    this.setState({ artSizingUnit });
    this.setState({ artSizingUnitDropdownOpen: false });
  }


  handleSizingInputAddition(e) {
    var count = `${this.state.artSizingCount + 1}`;
    var artSizingTracker = this.state.artSizingTracker;
    var artSizingInput = this.state.artSizingInput;
    artSizingTracker.push(count);
    artSizingInput.push(["height", "width"]);

    this.setState({ artSizingTracker });
    this.setState({ artSizingInput });
    this.setState({ artSizingCount: parseInt(count)});
  }





  render() {
    return (
      <div id="add_item_container" className={ this.props.isShowing ? "" : "hidden" }>

        <div className="inventory_gamepad_add_item_form">
          <h1 className="inventory_gamepad_content_window_title"> Add Item </h1>

          <div id="add_item_name_entry_container" className="form-group">
            <label id="add_item_name_entry_title" htmlFor="name">Name:</label>
            <Field id="add_item_name_entry_input" className="form-control" name="name" component="input" type="text" />
          </div>

          <div id="add_item_picture_reel_container"> Picture Reel</div>

          <div id="add_item_intention_statement_container" className="form-group">
            <label id="add_item_intention_statement_entry_title" htmlFor="intention_statement">Intention Statement:</label>
            <div id="add_item_intention_statement_entry_gist">
              Gist gist gist gist gist gist gist gist gist gist gist gist gist gist gist gist gist gist gist gist gist gist gist gist gist gist
            </div>
            <Field id="add_item_intention_statement_entry_input" className="form-control" name="intention_statement" component="textarea" type="text" />
          </div>

          <div id="add_item_use_as_description_container">
              <CheckboxOrRadioGroup
                  id="add_item_use_as_description_checkbox"
                  divClassName="checkbox-group no_label_checkbox"
                  labelClassName="form-label capitalize"
                  inputClassName="form-checkbox"
                  controlFunc={this.handleUseAsDescriptionSelection}
                  type={'checkbox'}
                  options={trueness}
                  selectedOptions={this.state.useAsDescription} />
              <label id="add_item_use_as_description_label" htmlFor="use_as_description">Use as description?</label>
          </div>

          <div id="add_item_description_container" className={"form-group " + (this.state.useAsDescription[0] ? 'hidden' : 'show')}>
            <label id="add_item_description_entry_title" htmlFor="description">Description:</label>
            <Field id="add_item_description_entry_input" className="form-control" name="description" component="textarea" type="text" />
          </div>


          <div id="add_item_post_description_col_1">

            <div id="add_item_category_selection_container">
              <label id="add_item_category_selection_label" className="form_field_title_label" htmlFor="add_item_category_selection_radio">Category Selection:</label>
              <CheckboxOrRadioGroup
                  id="add_item_category_selection_radio_group"
                  divClassName="checkbox-group"
                  labelClassName="form-label capitalize vertical_selection_labels"
                  inputClassName="form-radio"
                  setName={CATEGORIES}
                  controlFunc={this.handleAddItemCategorySelection}
                  type={'radio'}
                  options={CATEGORIES}
                  selectedOptions={this.state.selectedCategory} />
            </div>

            <div id="add_item_article_type_container" className={'' + (this.state.selectedCategory.indexOf('Clothing') > -1 ? 'show' : 'hidden')}>
              <label id="add_item_article_type_selection_label" className="form_field_title_label" htmlFor="add_item_article_type_selection_radio">Article Type Selection:</label>
              <CheckboxOrRadioGroup
                  id="add_item_article_type_selection_radio_group"
                  divClassName="checkbox-group"
                  labelClassName="form-label capitalize vertical_selection_labels"
                  inputClassName="form-checkbox"
                  setName={ARTICLE_TYPES}
                  controlFunc={this.handleAddItemArticleSelection}
                  type={'checkbox'}
                  options={ARTICLE_TYPES}
                  selectedOptions={this.state.selectedArticleTypes} />
            </div>

            <div id="add_item_article_time_log_container"> Time Log </div>

          </div>


          <div id="add_item_post_description_col_2">

            <div id="add_item_article_subcategory_tagging_container">

              <div className="add_item_tagging_titlehead_label">Subcategory Tagging</div>

              <div className="add_item_tagging_input_container">
                <Field
                  id="add_item_subcategory_tagging_input"
                  className="form-control add_item_tagging_input"
                  name="subcategory"
                  component="input"
                  type="text"
                  value={this.state.subCategoryInputValue}
                  onChange={this.handleSubcategoryInputChange}
                  onKeyPress={this.handleSubCategoryInputKeyPress} />
                <button id="add_item_subcategory_tagging_input_submit_btn" className="btn btn-primary add_item_tagging_input_submit_btn" onClick={this.handleSubcategoryInputTagSelection} ></button>
              </div>

              <button className={"btn btn-primary add_item_tagging_dropdown_btn " + (this.state.subCategoryDropdownOpen ? 'no_border_radius_bottom' : 'closed')} onClick={this.handleSubcategoryDropdownOpen}></button>

              <div className={"add_item_tagging_dropdown_menu " + (this.state.subCategoryDropdownOpen ? 'show' : 'hidden')}>

                <Scrollbars
                  className="add_item_tag_scroll"
                  onScroll={this.handleScroll}
                  onScrollFrame={this.handleScrollFrame}
                  onScrollStart={this.handleScrollStart}
                  onScrollStop={this.handlenScrollStop}
                  onUpdate={this.handleUpdate}>
                  <CheckboxOrRadioGroup
                      id="add_item_subcategory_tagging_dropdown_menu_tag_options"
                      divClassName="add_item_tagging_dropdown_menu_tag_options"
                      labelClassName="form-label capitalize dropdown_tag_checkbox_selections"
                      inputClassName="form-checkbox"
                      setName={SUBCATEGORIES}
                      controlFunc={this.handleSubcategoryDropdownTagCheckboxSelection}
                      type={'checkbox'}
                      options={SUBCATEGORIES}
                      selectedOptions={this.state.subCategoryTagSelections} />
                </Scrollbars>

              </div>

              <div className="add_item_tagging_selected_tag_container">
                <Scrollbars
                  className="add_item_tag_scroll"
                  onScroll={this.handleScroll}
                  onScrollFrame={this.handleScrollFrame}
                  onScrollStart={this.handleScrollStart}
                  onScrollStop={this.handlenScrollStop}
                  onUpdate={this.handleUpdate}>
                  <TagGroup
                      id="add_item_subcategory_tag_group"
                      groupClassName="add_item_selected_tag_group"
                      className="add_item_selected_tag"
                      closerClassName="add_item_selected_tag_delete_x"
                      setName={this.state.subCategoryTagSelections}
                      options={this.state.subCategoryTagSelections}
                      selectedOptions={this.state.subCategoryTagSelections}
                      onSubCategoryTagDeleteClick={this.onSubCategoryTagDeleteClick} />
                </Scrollbars>

              </div>

            </div>


            <div id="add_item_article_vibe_tagging_container"> Vibe Tagging </div>
            <div id="add_item_article_material_tagging_container"> Material Tagging </div>
            <div id="add_item_article_color_tagging_container"> Color Tagging </div>
            <div id="add_item_article_technique_tagging_container"> Technique Tagging </div>
            <div id="add_item_article_tag_tagging_container"> Tag Tagging </div>

          </div>

          <div id="add_item_article_sizing_container">

            <div id="add_item_art_sizing_measurement_unit_dropdown" onClick={this.handleSizingInputDropdownOpen}>{this.state.artSizingUnit}</div>
            <div id="add_item_art_sizing_measurement_unit_dropdown_menu" className={'' + (this.state.artSizingUnitDropdownOpen ? 'show' : 'hidden')}>
              <li className="add_item_art_sizing_measurement_unit_dropdown_list_item" onClick={this.handleSizingUnitSelection}>inches</li>
              <li className="add_item_art_sizing_measurement_unit_dropdown_list_item" onClick={this.handleSizingUnitSelection}>feet</li>
              <li className="add_item_art_sizing_measurement_unit_dropdown_list_item" onClick={this.handleSizingUnitSelection}>centimeters</li>
              <li className="add_item_art_sizing_measurement_unit_dropdown_list_item" onClick={this.handleSizingUnitSelection}>meters</li>
            </div>

            <ArtSizingCardGroup
              groupClassName="add_item_art_sizing_input_group"
              containerClassName="add_item_art_sizing_input_container"
              inputLowendClassName="form control add_item_art_sizing_input add_item_art_sizing_lowend_input"
              inputHighendClassName="form control add_item_art_sizing_input add_item_art_sizing_highend_input"
              name="sizing"
              type="text"
              options={this.state.artSizingTracker}
              value={this.state.artSizingInput}
              handleSizingInputLowendChange={this.handleSizingInputLowendChange}
              handleSizingInputHighendChange={this.handleSizingInputHighendChange}
              handleSizingInputDropdownOpen={this.handleSizingInputDropdownOpen}
              />

            <div id="add_item_art_sizing_input_addition_btn" onClick={this.handleSizingInputAddition}>
              +
            </div>


          </div>

          <div id="add_item_article_pricing_container"> Pricing </div>
          <div id="add_item_article_shipping_container"> Shipping </div>
          <div id="add_item_article_placement_container"> Placement </div>

          <button type="submit" id="add_item_submission_btn" className="btn btn-primary" onSubmit={this.props.submit}> Submit </button>

        </div>
      </div>
  	);
  }
}

GamePadAddItemForm = reduxForm({
  form: 'GamePadAddItem'
})(GamePadAddItemForm)

export default GamePadAddItemForm;
