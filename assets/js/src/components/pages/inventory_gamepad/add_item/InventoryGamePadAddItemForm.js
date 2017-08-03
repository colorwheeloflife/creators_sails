import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { Scrollbars } from 'react-custom-scrollbars';
import Dropzone from 'react-dropzone';

import SelectField from '../../../reusables/SelectField';
import MultiSelectField from '../../../reusables/MultiSelectField';
import CheckboxOrRadioGroup from '../../../reusables/CheckboxOrRadioGroup';
import CheckboxOrRadioWithoutOptionDisplay from '../../../reusables/CheckboxOrRadioWithoutOptionDisplay';
import CheckboxOrRadioWithOptionDisplay from '../../../reusables/CheckboxOrRadioWithOptionDisplay';
import TagGroup from '../../../reusables/TagGroup';

import ArtSizingField from './fields/sizing/ArtSizingField';
import ClothingSizingField from './fields/sizing/ClothingSizingField';
import JewelrySizingField from './fields/sizing/JewelrySizingField';
import ShippingCardGroup from './fields/shipping/ShippingCardGroup';


var trueness = [true];
var CATEGORIES = ['Visual Art', 'Clothing', 'Accessories', 'Jewelry', 'Instruments', 'Totems'];
var CLOTHING_ARTICLE_TYPES = ['Tops', 'Bottoms', 'Vests', 'Tutus'];
var JEWELRY_ARTICLE_TYPES = ['Bracelet', 'Earring', 'Necklace', 'Nose Ring', 'Ring'];
var SUBCATEGORIES = ['Acrylic', 'Digital Art', 'Fingerpaint', 'Wood Craftsmanship', 'Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8', 'Option 9', 'Option 10', 'Option 11', 'Option 12', 'Option 13', 'Option 14', 'Option 15' ];

const REGIONS = [
	{ label: 'British Columbia', value: 'British Columbia' },
	{ label: 'Alberta', value: 'Alberta' },
	{ label: 'Washington', value: 'Washington' },
	{ label: 'Oregon', value: 'Oregon' },
	{ label: 'Nevada', value: 'Nevada' },
	{ label: 'Arizona', value: 'Arizona' },
  { label: 'New Mexico', value: 'New Mexico' },
  { label: 'Colorado', value: 'Colorado' }
];

const PROCESSING_TIME_OPTIONS = [
	{ label: '1 business day', value: '1 business day' },
	{ label: '1-2 business days', value: '1-2 business days' },
	{ label: '1-3 business days', value: '1-3 business days' },
	{ label: '2-5 business days', value: '2-5 business days' },
	{ label: '1 week', value: '1 week' },
	{ label: '1-2 weeks', value: '1-2 weeks' },
  { label: 'over 2 weeks', value: 'over 2 weeks' },
  { label: '1 month', value: '1 month' },
  { label: 'over a month', value: 'over a month' }
];


class InventoryGamePadAddItemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
			useAsDescription: [true],
			selectedCategory: [],
			selectedClothingArticleTypes: [],
      selectedJewelryArticleTypes: [],

      subCategoryDropdownOpen: false,

      timeLogHours: "",
      timeLogMinutes: "",
      timeLogPrecisionSelection: [],

      subCategoryInputValue: "",
      subCategoryTagSelections: [],

      artSizingTracker: ["1"],
      artSizingCount: 1,
      artSizingInput: [["height", "width"]],
      artSizingUnitDropdownOpen: false,
      artSizingUnit: "Unit",

      clothingSizingTracker: ["1", "2", "3", "4", "5"],
      clothingSizingCount: 5,
      clothingSizingInput: [0, 0, 0, 0, 0],
      clothingSizingOptions: ["XS", "S", "M", "L", "XL"],
      clothingSizingCounts: [0, 0, 0, 0, 0],
      clothingInputGroupClass: "clothing_size_input_5_group",

      jewelrySizingTracker: ["1"],
      jewelrySizingCount: 1,
      jewelrySizingInput: [["in mm"]],
      jewelrySizingUnitDropdownOpen: false,
      jewelrySizingUnit: "mm",

      itemOnSaleTracker: ["1"],
      itemOnSaleCount: 1,
      itemOnSaleDeclarations: [""],

      shippingOriginSelections: "",
      shippingProcessingTimeSelections: "",

      shippingDestinations: ['Canada', 'USA', 'Everywhere Else'],
      shippingDestinationCosts: [["", ""], ["", ""], ["", ""]]
		}
  }

  componentDidMount() {}


  onDrop = (acceptedFiles, rejectedFiles) => {
      console.log('Received files: ', files);
      console.log('Received files: ', rejectedFiles);

      var files = this.state.files;
      acceptedFiles.map(function(acceptedFile) {  files.push(acceptedFile);  });

      this.setState({ files });
      console.log(this.state.files);
  }


  onDropzoneOpenClick = () => {
      this.refs.dropzone.open();
  }


  handleUseAsDescriptionSelection = (e) => {
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


	handleAddItemCategorySelection = (e) => {
		this.setState({ selectedCategory: e.target.value });
	}


  handleArticleTypeShowValidation = (selected) => {
    var validated = false;
    var accepted_categories = ['Clothing', 'Jewelry'];
    if (accepted_categories.indexOf(selected) > -1) {
      validated = true;
    }
    return validated;
  }


	handleAddItemArticleSelection = (e) => {
		const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    var selectedArticleTypes = "";

    switch (true) {
      case (CLOTHING_ARTICLE_TYPES.indexOf(name) > -1):
        var selectedClothingArticleTypes = this.state.selectedClothingArticleTypes;
        updateSelection(selectedClothingArticleTypes);
        this.setState({ selectedClothingArticleTypes });
        break;
      case (JEWELRY_ARTICLE_TYPES.indexOf(name) > -1):
        var selectedJewelryArticleTypes = this.state.selectedJewelryArticleTypes;
        updateSelection(selectedJewelryArticleTypes);
        this.setState({ selectedJewelryArticleTypes });
        break;
      default:
        console.log('no article type match');
    }

    function updateSelection(container) {
      if (value) {
        container.push(name);
      } else {
        var index = container.indexOf(name);
        container.splice(index, 1);
      }
    }
	}


  handleTimeLogHoursInputChange = (e) => {
    this.setState({ timeLogHours: e.target.value });
    console.log(e.target.value);
    console.log(this.state.timeLogHours);
  }


  handleTimeLogMinutesInputChange = (e) => {
    this.setState({ timeLogMinutes: e.target.value });
    console.log(e.target.value);
    console.log(this.state.timeLogMinutes);
  }

  handleTimeLogPrecisionSelection = (e) => {
    var target = e.target;
    var name = e.target.name;

    console.log(name);

    // switch (name) {
    //   case 'exact':
        this.setState({ timeLogPrecisionSelection: [name] });
    // }
  }







  handleSubcategoryDropdownOpen = (e) => {
    const subCategoryDropdownOpen = this.state.subCategoryDropdownOpen;

    this.setState({ subCategoryDropdownOpen: !subCategoryDropdownOpen });
  }


  handleSubcategoryInputChange = (e) => {
    const value = e.target.value;

    this.setState({ subCategoryInputValue: value });
  }


  handleSubcategoryInputTagSelection = (e) => {
    var tag = this.state.subCategoryInputValue;
    var subCategoryTagSelections = this.state.subCategoryTagSelections;
    subCategoryTagSelections.push(tag);

    this.setState({
      subCategoryTagSelections,
      subCategoryInputValue: ""
    });
  }


  handleSubCategoryInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      var tag = this.state.subCategoryInputValue;
      var subCategoryTagSelections = this.state.subCategoryTagSelections;
      subCategoryTagSelections.push(tag);

      this.setState({ subCategoryTagSelections });
      this.setState({ subCategoryInputValue: "" });
    }
  }


  handleSubcategoryDropdownTagCheckboxSelection = (e) => {
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


  onSubCategoryTagDeleteClick = (t) => {
    var subCategoryTagSelections = this.state.subCategoryTagSelections;
    var index = subCategoryTagSelections.indexOf(t);
    subCategoryTagSelections.splice(index, 1);

    this.setState({ subCategoryTagSelections });
  }


  handleSizingInputLowendChange = (e) => {
    var value = e.target.value;
    var token = e.target.name;

    var artSizingInput = this.state.artSizingInput;
    var artSizingTracker = this.state.artSizingTracker;
    var index = artSizingTracker.indexOf(token);

    artSizingInput[index][0] = value;

    this.setState({ artSizingInput });
    // console.log(this.state.artSizingInput);
  }


  handleSizingInputHighendChange = (e) => {
    var value = e.target.value;
    var token = e.target.name;

    var artSizingInput = this.state.artSizingInput;
    var artSizingTracker = this.state.artSizingTracker;
    var index = artSizingTracker.indexOf(token);

    artSizingInput[index][1] = value;

    this.setState({ artSizingInput });
    // console.log(this.state.artSizingInput);
  }


  handleSizingInputDropdownOpen = (e) => {
    var artSizingUnitDropdownOpen = this.state.artSizingUnitDropdownOpen;
    if (artSizingUnitDropdownOpen) {
      artSizingUnitDropdownOpen = false;
    } else {
      artSizingUnitDropdownOpen = true;
    }

    this.setState({ artSizingUnitDropdownOpen });
  }


  handleSizingUnitSelection = (e) => {
    var artSizingUnit = e.target.innerHTML;
    this.setState({ artSizingUnit });
    this.setState({ artSizingUnitDropdownOpen: false });
  }


  handleArtSizingInputAddition = (e) => {
    var count = `${this.state.artSizingCount + 1}`;
    var artSizingTracker = this.state.artSizingTracker;
    var artSizingInput = this.state.artSizingInput;
    artSizingTracker.push(count);
    artSizingInput.push(["height", "width"]);

    this.setState({ artSizingTracker });
    this.setState({ artSizingInput });
    this.setState({ artSizingCount: parseInt(count)});
  }


  handleClothingSizeCountChange = (e) => {
    var value = e.target.value;
    var name = e.target.name;

    var clothingSizingOptions = this.state.clothingSizingOptions;
    var clothingSizingCounts = this.state.clothingSizingCounts;

    var index = clothingSizingOptions.indexOf(name);
    clothingSizingCounts[index] = value;

    this.setState({ clothingSizingCounts });
  }


  handleClothingSizingInputAddition = (e) => {
    var target = e.target;
    var position = target.getAttribute("name");

    var count = `${this.state.clothingSizingCount + 1}`;
    var clothingSizingTracker = this.state.clothingSizingTracker;
    var clothingSizingInput = this.state.clothingSizingInput;
    var clothingSizingOptions = this.state.clothingSizingOptions;
    var clothingInputGroupClass = "";

    if (position === "before") {
      clothingSizingTracker.unshift(count);
      clothingSizingInput.unshift(0);
      clothingSizingOptions.unshift("XXS");
    }

    if (position === "after") {
      clothingSizingTracker.push(count);
      clothingSizingInput.push(0);
      clothingSizingOptions.push("XXL");
    }

    switch ( parseInt(count) ) {
      case 6:
        clothingInputGroupClass = "clothing_size_input_6_group";
        break;
      case 7:
        clothingInputGroupClass = "clothing_size_input_7_group";
      default:
        break;
    }

    this.setState({ clothingSizingTracker });
    this.setState({ clothingSizingInput });
    this.setState({ clothingSizingCount: parseInt(count)});
    this.setState({ clothingInputGroupClass });
  }








  // handleSizingInputLowendChange = (e) => {
  //   var value = e.target.value;
  //   var token = e.target.name;
  //
  //   var artSizingInput = this.state.artSizingInput;
  //   var artSizingTracker = this.state.artSizingTracker;
  //   var index = artSizingTracker.indexOf(token);
  //
  //   artSizingInput[index][0] = value;
  //
  //   this.setState({ artSizingInput });
  //   // console.log(this.state.artSizingInput);
  // }




  handleJewelrySizingInputChange = (e) => {
    var value = e.target.value;
    var token = e.target.name;

    console.log('value', value);
    console.log('token', token);

    var jewelrySizingInput = this.state.jewelrySizingInput;
    var jewelrySizingTracker = this.state.jewelrySizingTracker;
    var index = jewelrySizingTracker.indexOf(token);

    jewelrySizingInput[index][0] = value;

    console.log('array', jewelrySizingInput);
    console.log('index', index);
    console.log('index chosen', jewelrySizingInput[index]);
    console.log('index chosen', jewelrySizingInput[index][0]);

    this.setState({ jewelrySizingInput });
    console.log(this.state.jewelrySizingInput);
  }


  handleJewelrySizingInputAddition = (e) => {
    var original_count = this.state.jewelrySizingCount;
    var new_number_count = parseInt(original_count) + 1;
    var jewelrySizingTracker = this.state.jewelrySizingTracker;
    var jewelrySizingInput = this.state.jewelrySizingInput;
    jewelrySizingTracker.push(new_number_count.toString());
    jewelrySizingInput.push([""]);

    this.setState({ jewelrySizingTracker });
    this.setState({ jewelrySizingInput });
    this.setState({ jewelrySizingCount: new_number_count });
  }




  handleItemOnSaleSelection(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

		var itemOnSaleDeclarations = this.state.itemOnSaleDeclarations;
    var index = this.state.itemOnSaleTracker.indexOf(name);

    if ( itemOnSaleDeclarations[1] ) {
      if ( itemOnSaleDeclarations[index] ) {
        itemOnSaleDeclarations[index].slice(index, 1);
      } else {
        itemOnSaleDeclarations[index].push(name);
      }
    } else {
      if (value) {
        itemOnSaleDeclarations = [name];
      } else {
        itemOnSaleDeclarations = [""];
      }
    }
		this.setState({ itemOnSaleDeclarations });
  }



  handleShippingOriginSelections = (selection) => {
    var shippingOriginSelections = this.state.shippingOriginSelections;
    shippingOriginSelections = selection;

    this.setState({ shippingOriginSelections });
  }


  handleShippingProcessingTimeSelections = (selection) => {
    var shippingProcessingTimeSelections = this.state.shippingProcessingTimeSelections;
    shippingProcessingTimeSelections = selection;

    this.setState({ shippingProcessingTimeSelections });
  }



  handleOneItemShippingCost = (e) => {
    var value = e.target.value;
    var name = e.target.name;

    var shippingDestinations = this.state.shippingDestinations;
    var index = shippingDestinations.indexOf(name);
    var shippingDestinationCosts = this.state.shippingDestinationCosts;

    shippingDestinationCosts[index][0] = value;

    this.setState({ shippingDestinationCosts });
  }

  handleAdditionalItemsShippingCost = (e) => {

  }

  handleAdditionalShippingDestination = (e) => {

  }


  handlePreSubmit = () => {
    var values_obj = {};
  }


  render() {
    const files = this.state.files.map((file) => <img key={file.name} src={file.preview} className="add_item_picture_preview"/>)

    return (
      <div id="add_item_container" className={ this.props.isShowing ? "" : "hidden" }>


        <form className="inventory_gamepad_add_item_form" onSubmit={ this.props.handleSubmit }>
          <h1 className="inventory_gamepad_content_window_title"> Add Item </h1>

          <div id="add_item_name_entry_container" className="form-group">
            <label id="add_item_name_entry_title" htmlFor="name">Name:</label>
            <Field id="add_item_name_entry_input" className="form-control" name="name" component="input" type="text" />
          </div>


          <div id="add_item_picture_reel_container">
            <div id="add_item_picture_dropzone_upload">
              <Dropzone ref="dropzone" id="add_item_dropzone_pad" onDrop={this.onDrop} >
                <div>Try dropping some files here, or click to select files to upload.</div>
              </Dropzone>
              <button type="button" id="add_item_dropzone_btn" className="btn btn-primary" onClick={this.onDropzoneOpenClick}>
                  Open Dropzone
              </button>
            </div>
            {this.state.files ? <div id="add_item_picture_previews_container">
              <Scrollbars
                className="add_item_picture_scroll"
                onScroll={this.handleScroll}
                onScrollFrame={this.handleScrollFrame}
                onScrollStart={this.handleScrollStart}
                onScrollStop={this.handlenScrollStop}
                onUpdate={this.handleUpdate}>
                <div>{files}</div>
              </Scrollbars>
            </div> : null}
          </div>


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

            <div id="add_item_article_type_container" className={'' + (this.handleArticleTypeShowValidation(this.state.selectedCategory) === true ? 'show' : 'hidden')}>

              <label id="add_item_article_type_selection_label" className="form_field_title_label">Article Type Selection:</label>

              <div className={"" + (this.state.selectedCategory.indexOf('Clothing') > -1 ? 'show' : 'hidden')}>
                <CheckboxOrRadioGroup
                    id="add_item_clothing_article_type_selection_radio_group"

                    divClassName="checkbox-group"
                    labelClassName="form-label capitalize vertical_selection_labels"
                    inputClassName="form-checkbox"
                    setName={CLOTHING_ARTICLE_TYPES}
                    controlFunc={this.handleAddItemArticleSelection}
                    type={'checkbox'}
                    options={CLOTHING_ARTICLE_TYPES}
                    selectedOptions={this.state.selectedClothingArticleTypes} />
              </div>

              <div className={"" + (this.state.selectedCategory.indexOf('Jewelry') > -1 ? 'show' : 'hidden')}>
                <CheckboxOrRadioGroup
                    id="add_item_jewelry_article_type_selection_radio_group"

                    divClassName="checkbox-group"
                    labelClassName="form-label capitalize vertical_selection_labels"
                    inputClassName="form-checkbox"
                    setName={JEWELRY_ARTICLE_TYPES}
                    controlFunc={this.handleAddItemArticleSelection}
                    type={'checkbox'}
                    options={JEWELRY_ARTICLE_TYPES}
                    selectedOptions={this.state.selectedJewelryArticleTypes} />
              </div>
            </div>



            <div id="add_item_article_time_log_container">

              <label id="add_item_time_log_label_hours" className="add_item_time_log_label"> Hours: </label>

              <input
                id="add_item_time_log_input_hours"
                className="add_item_time_log_input"
                name="add_item_time_log_input_hour"
                type="text"
                value={this.state.timeLogHours}
                onChange={this.handleTimeLogHoursInputChange} />

              <label id="add_item_time_log_label_minutes" className="add_item_time_log_label"> Minutes: </label>

              <input
                id="add_item_time_log_input_minutes"
                className="add_item_time_log_input"
                name="add_item_time_log_input_min"
                type="text"
                value={this.state.timeLogMinutes}
                onChange={this.handleTimeLogMinutesInputChange} />

              <CheckboxOrRadioWithOptionDisplay
                id="add_item_time_log_exact_time_radio"
                divClassName="checkbox-group add_item_time_log_precision_container"
                inputClassName="form-checkbox"
                controlFunc={this.handleTimeLogPrecisionSelection}
                type={'radio'}
                options="exact"
                selectedOptions={this.state.timeLogPrecisionSelection}
              />

              <CheckboxOrRadioWithOptionDisplay
                id="add_item_time_log_approx_time_radio"
                divClassName="checkbox-group add_item_time_log_precision_container"
                inputClassName="form-checkbox"
                controlFunc={this.handleTimeLogPrecisionSelection}
                type={'radio'}
                options="approximate"
                selectedOptions={this.state.timeLogPrecisionSelection}
              />



            </div>

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
                      inputClassName="form-checkbox form-control"
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
            <div id="add_item_sizing_container_empty_message" className={"" + (this.state.selectedCategory[0] ? 'hidden' : 'show')}>
              Select A Category To Render Sizing Field
            </div>

            <ArtSizingField
              selectedCategory={this.state.selectedCategory}
              handleSizingInputDropdownOpen={this.handleSizingInputDropdownOpen}
              handleSizingUnitSelection={this.handleSizingUnitSelection}
              handleSizingInputLowendChange={this.handleSizingInputLowendChange}
              handleSizingInputHighendChange={this.handleSizingInputHighendChange}
              handleSizingInputDropdownOpen={this.handleSizingInputDropdownOpen}
              handleArtSizingInputAddition={this.handleArtSizingInputAddition}

              artSizingUnitDropdownOpen={this.state.artSizingUnitDropdownOpen}
              artSizingTracker={this.state.artSizingTracker}
              artSizingInput={this.state.artSizingInput}
              artSizingUnit={this.state.artSizingUnit}
              />

            <ClothingSizingField
              selectedCategory={this.state.selectedCategory}
              clothingSizingOptions={this.state.clothingSizingOptions}
              handleClothingSizeCountChange={this.handleClothingSizeCountChange}
              handleClothingSizingInputAddition={this.handleClothingSizingInputAddition}
              clothingInputGroupClass={this.state.clothingInputGroupClass}
              />

            <JewelrySizingField
              selectedCategory={this.state.selectedCategory}
              selectedJewelryArticleTypes={this.state.selectedJewelryArticleTypes}

              jewelrySizingTracker={this.state.jewelrySizingTracker}
              jewelrySizingInput={this.state.jewelrySizingInput}
              handleJewelrySizingInputChange={this.handleJewelrySizingInputChange}
              handleJewelrySizingInputAddition={this.handleJewelrySizingInputAddition}
            />
          </div>

          <div id="add_item_article_pricing_container">

            <div className="add_item_price_input_card">
              <label className="add_item_price_entry_title" htmlFor="price">Price:</label>
              <Field className="add_item_price_entry_input form-control" name="price" component="input" type="text" />

              <label className="add_item_sale_price_entry_title" htmlFor="price">When on sale:</label>
              <Field className="add_item_sale_price_entry_input form-control" name="sale_price" component="input" type="text" />


                <div className="add_item_on_sale_checkbox_container">
                    <CheckboxOrRadioWithoutOptionDisplay
                        id="add_item_on_sale_checkbox"
                        divClassName="checkbox-group no_label_checkbox"
                        labelClassName="form-label capitalize"
                        inputClassName="form-checkbox"
                        controlFunc={this.handleItemOnSaleSelection}
                        type={'checkbox'}
                        options={this.state.itemOnSaleTracker}
                        selectedOptions={this.state.itemOnSaleDeclarations} />
                      <label className="add_item_item_on_sale_label" htmlFor="item_on_sale">On Sale?</label>
                </div>

            </div>

          </div>






          <div id="add_item_article_shipping_container">
            <div id="add_item_shipping_origin_selection_container">




              <div id="add_item_shipping_origin_col_1">
                <label id="add_item_shipping_origin_selection_label" className="add_item_shipping_origin_label"> Shipping Origin </label>
                <span className="add_item_shipping_origin_span_descriptor"> The region this will be shipped from </span>

                  <label id="add_item_shipping_processing_time_selection_label" className="add_item_shipping_origin_label"> Processing Time </label>
                  <span className="add_item_shipping_origin_span_descriptor"> Upon purchase, how long will it take to ship the item? </span>

              </div>

              <div id="add_item_shipping_origin_col_2">


                <div id="add_item_shipping_origin_selection_dropdown" className="add_item_shipping_origin_dropdown">
                  <SelectField
                    options={REGIONS}
                    placeholder="Select a region:"
                    disabled={this.state.disabled}
                    value={this.state.shippingOriginSelections}
                    handleSelectChange={this.handleShippingOriginSelections}
                  />
                </div>

                <div id="add_item_shipping_processing_time_selection_dropdown" className="add_item_shipping_origin_dropdown">
                  <SelectField
                    options={PROCESSING_TIME_OPTIONS}
                    placeholder="Select your processing time:"
                    disabled={this.state.disabled}
                    value={this.state.shippingProcessingTimeSelections}
                    handleSelectChange={this.handleShippingProcessingTimeSelections}
                  />
                </div>



              </div>



            </div>
          </div>







          <div id="add_item_article_placement_container"> Placement </div>



          <button type="submit" id="add_item_submission_btn" className="btn btn-primary"> Submit </button>

        </form>
      </div>
  	);
  }
}

InventoryGamePadAddItemForm = reduxForm({
  form: 'GamePadAddItem'
})(InventoryGamePadAddItemForm)

export default InventoryGamePadAddItemForm;




/*



<table id="add_item_shipping_table" className="table table-responsive table-hover">
  <thead id="add_item_shipping_head">
    <tr>
      <th></th>
    </tr>
  </thead>
  <tbody id="add_item_shipping_body"></tbody>


</table>

<ShippingCardGroup
  groupClassName="add_item_article_shipping_group"
  containerClassName="add_item_article_shipping_card"
  labelClassName="add_item_article_shipping_label"
  inputOneItemClassName="add_item_article_shipping_input add_item_article_shipping_input_one_item"
  inputAdditionalItemsClassName="add_item_article_shipping_input add_item_article_shipping_additional_items"
  options={this.state.shippingDestinations}
  value={this.state.shippingDestinationCosts}
  handleOneItemShippingCost={this.handleOneItemShippingCost}
  handleEachAdditionalItemShippingCost={this.handleEachAdditionalItemShippingCost}
  handleAdditionalShippingDestination={this.handleAdditionalShippingDestination}

/>




*/
