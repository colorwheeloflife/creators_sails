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

import ArtInventoryField from './fields/sizing/ArtInventoryField';
import ClothingSizingField from './fields/sizing/ClothingSizingField';
import JewelrySizingField from './fields/sizing/JewelrySizingField';
import ShippingCardTableRowGroup from './fields/shipping/shippingCardTableRowGroup';


var trueness = [true];
var CATEGORIES = ['Visual Art', 'Clothing', 'Accessories', 'Jewelry', 'Instruments', 'Totems'];
var CLOTHING_ARTICLE_TYPES = ['Tops', 'Bottoms', 'Vests', 'Tutus'];
var JEWELRY_ARTICLE_TYPES = ['Bracelet', 'Earring', 'Necklace', 'Nose Ring', 'Ring'];
var SUBCATEGORIES = ['Acrylic', 'Digital Art', 'Fingerpaint', 'Wood Craftsmanship', 'Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8', 'Option 9', 'Option 10', 'Option 11', 'Option 12', 'Option 13', 'Option 14', 'Option 15' ];
var VIBES = ['Enchanted Wonderland', 'Sacred Nomad'];
var MATERIALS = [];
var COLORS = [];
var TECHNIQUES = [];
var TAGS = [];

var measurement_units = ["inches", "feet", "centimeters", "meters"];
var currencies = ["CAN", "USA"];

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

      timeLogHours: "",
      timeLogMinutes: "",
      timeLogPrecisionSelection: [],

			subCategoryDropdownOpen: false,
      subCategoryInputValue: "",
      subCategoryTagSelections: [],

			vibeDropdownOpen: false,
			vibeInputValue: "",
			vibeTagSelections: [],

			materialDropdownOpen: false,
			materialInputValue: "",
			materialTagSelections: [],

			colorDropdownOpen: false,
			colorInputValue: "",
			colorTagSelections: [],

			techniqueDropdownOpen: false,
			techniqueInputValue: "",
			techniqueTagSelections: [],

			standardTagDropdownOpen: false,
			standardTagInputValue: "",
			standardTagSelections: [],

			artInventoryUnitDropdownOpen: false,
			artInventoryCurrencyDropdownOpen: false,
			artInventoryUnit: "Unit",
			artInventoryCurrency: "CUR",

			artInventoryTracker: ["1"],
			artInventoryCount: 1,
			artInventoryInput: [["height", "width"]],
			artInventoryQuantity: ["#"],
			artInventoryPrice: ["$ _"],
			artInventorySalePrice: ["$ _"],

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
      itemOnSaleDeclarations: ["0"],

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
  }


  handleTimeLogMinutesInputChange = (e) => {
    this.setState({ timeLogMinutes: e.target.value });
  }

  handleTimeLogPrecisionSelection = (e) => {
    var target = e.target;
    var name = e.target.name;

    this.setState({ timeLogPrecisionSelection: [name] });
  }







  handleTaggingDropdownOpen = (e) => {
		var target = e.target;
		var name = target.name;

		switch (name) {
			case 'subcategory_dropdown':
				const subCategoryDropdownOpen = this.state.subCategoryDropdownOpen;
		    this.setState({ subCategoryDropdownOpen: !subCategoryDropdownOpen });
				break;
			case 'vibe_dropdown':
				const vibeDropdownOpen = this.state.vibeDropdownOpen;
		    this.setState({ vibeDropdownOpen: !vibeDropdownOpen });
				break;
			case 'material_dropdown':
				const materialDropdownOpen = this.state.materialDropdownOpen;
		    this.setState({ materialDropdownOpen: !materialDropdownOpen });
				break;
			case 'color_dropdown':
				const colorDropdownOpen = this.state.colorDropdownOpen;
		    this.setState({ colorDropdownOpen: !colorDropdownOpen });
				break;
			case 'technique_dropdown':
				const techniqueDropdownOpen = this.state.techniqueDropdownOpen;
		    this.setState({ techniqueDropdownOpen: !techniqueDropdownOpen });
				break;
			case 'standard_tag_dropdown':
				const standardTagDropdownOpen = this.state.standardTagDropdownOpen;
		    this.setState({ standardTagDropdownOpen: !standardTagDropdownOpen });
				break;
			default:
				console.log('wub wub');
				break;
		}

		/*

		handleVibeInputChange
		handleTaggingInputKeyPress
		handleVibeInputTagSelection
		handleVibeDropdownOpen
		handleVibeDropdownTagCheckboxSelection
		vibeTagSelections
		onVibeTagDeleteClick

		var name = e.target.name;
		console.log(name);

		switch (name) {
			case subcategory_:

				break;
			case vibe_:

				break;
			case material_:

				break;
			case color_:

				break;
			case technique_:

				break;
			case tag_:

				break;
			default:
				console.log('wub wub');
				break;
		}

		*/
  }


  handleTaggingInputChange = (e) => {
    const value = e.target.value;
		var name = e.target.name;

		switch (name) {
			case 'subcategory':
				this.setState({ subCategoryInputValue: value });
				break;
			case 'vibe':
				this.setState({ vibeInputValue: value });
				break;
			case 'material':
				this.setState({ materialInputValue: value });
				break;
			case 'color':
				this.setState({ colorInputValue: value });
				break;
			case 'technique':
				this.setState({ techniqueInputValue: value });
				break;
			case 'standard_tag':
				this.setState({ standardTagInputValue: value });
				break;
			default:
				console.log('wub wub');
				break;
		}
  }


  handleTaggingInputTagSelection = (e) => {
		var name = e.target.name;

		switch (name) {
			case 'subcategory_submit':
				var tag = this.state.subCategoryInputValue;
				var subCategoryTagSelections = this.state.subCategoryTagSelections;
				subCategoryTagSelections.push(tag);
				this.setState({
		      subCategoryTagSelections,
		      subCategoryInputValue: ""
		    });
				break;
			case 'vibe_submit':
				var tag = this.state.vibeInputValue;
				var vibeTagSelections = this.state.vibeTagSelections;
				vibeTagSelections.push(tag);
				this.setState({
					vibeTagSelections,
					vibeInputValue: ""
				});
				break;
			case 'material_submit':
				var tag = this.state.materialInputValue;
				var materialTagSelections = this.state.materialTagSelections;
				materialTagSelections.push(tag);
				this.setState({
					materialTagSelections,
					materialInputValue: ""
				});
				break;
			case 'color_submit':
				var tag = this.state.colorInputValue;
				var colorTagSelections = this.state.colorTagSelections;
				colorTagSelections.push(tag);
				this.setState({
					colorTagSelections,
					colorInputValue: ""
				});
				break;
			case 'technique_submit':
				var tag = this.state.techniqueInputValue;
				var techniqueTagSelections = this.state.techniqueTagSelections;
				techniqueTagSelections.push(tag);
				this.setState({
					techniqueTagSelections,
					techniqueInputValue: ""
				});
				break;
			case 'standard_tag_submit':
				var tag = this.state.standardTagInputValue;
				var standardTagSelections = this.state.standardTagSelections;
				standardTagSelections.push(tag);
				this.setState({
					standardTagSelections,
					standardTagInputValue: ""
				});
				break;
			default:
				console.log('wub wub');
				break;
		}
  }


  handleTaggingInputKeyPress = (e) => {
		var name = e.target.name;
    if (e.key === 'Enter') {
			switch (name) {
				case 'subcategory':
					var tag = this.state.subCategoryInputValue;
					var subCategoryTagSelections = this.state.subCategoryTagSelections;
					subCategoryTagSelections.push(tag);

					this.setState({
						subCategoryTagSelections,
						subCategoryInputValue: ""
					 });
					break;
				case 'vibe':
					var tag = this.state.vibeInputValue;
					var vibeTagSelections = this.state.vibeTagSelections;
					vibeTagSelections.push(tag);

					this.setState({
						vibeTagSelections,
						vibeInputValue: ""
					 });
					break;
				case 'material':
					var tag = this.state.materialInputValue;
					var materialTagSelections = this.state.materialTagSelections;
					materialTagSelections.push(tag);

					this.setState({
						materialTagSelections,
						materialInputValue: ""
					 });
					break;
				case 'color':
					var tag = this.state.colorInputValue;
					var colorTagSelections = this.state.colorTagSelections;
					colorTagSelections.push(tag);

					this.setState({
						colorTagSelections,
						colorInputValue: ""
					 });
					break;
				case 'technique':
					var tag = this.state.techniqueInputValue;
					var techniqueTagSelections = this.state.techniqueTagSelections;
					techniqueTagSelections.push(tag);

					this.setState({
						techniqueTagSelections,
						techniqueInputValue: ""
					 });
					break;
				case 'standard_tag':
					var tag = this.state.standardTagInputValue;
					var standardTagSelections = this.state.standardTagSelections;
					standardTagSelections.push(tag);

					this.setState({
						standardTagSelections,
						standardTagInputValue: ""
					 });
					break;
				default:
					console.log('wub wub');
					break;
			}
    }
  }


  handleTaggingDropdownTagCheckboxSelection = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

		switch (true) {
			case SUBCATEGORIES.indexOf(name) > -1:
				var subCategoryTagSelections = this.state.subCategoryTagSelections;
				if (value) {
					subCategoryTagSelections.push(name);
				} else {
					var index = subCategoryTagSelections.indexOf(name);
					subCategoryTagSelections.splice(index, 1);
				}
				this.setState({ subCategoryTagSelections });
				break;
			case VIBES.indexOf(name) > -1:
				var vibeTagSelections = this.state.vibeTagSelections;
				if (value) {
					vibeTagSelections.push(name);
				} else {
					var index = vibeTagSelections.indexOf(name);
					vibeTagSelections.splice(index, 1);
				}
				this.setState({ vibeTagSelections });
				break;
			case MATERIALS.indexOf(name) > -1:
				var materialTagSelections = this.state.materialTagSelections;
				if (value) {
					materialTagSelections.push(name);
				} else {
					var index = materialTagSelections.indexOf(name);
					materialTagSelections.splice(index, 1);
				}
				this.setState({ materialTagSelections });
				break;
			case COLORS.indexOf(name) > -1:
				var colorTagSelections = this.state.colorTagSelections;
				if (value) {
					colorTagSelections.push(name);
				} else {
					var index = colorTagSelections.indexOf(name);
					colorTagSelections.splice(index, 1);
				}
				this.setState({ colorTagSelections });
				break;
			case TECHNIQUES.indexOf(name) > -1:
				var techniqueTagSelections = this.state.techniqueTagSelections;
				if (value) {
					techniqueTagSelections.push(name);
				} else {
					var index = techniqueTagSelections.indexOf(name);
					techniqueTagSelections.splice(index, 1);
				}
				this.setState({ techniqueTagSelections });
				break;
			case TAGS.indexOf(name) > -1:
				var standardTagSelections = this.state.standardTagSelections;
				if (value) {
					standardTagSelections.push(name);
				} else {
					var index = standardTagSelections.indexOf(name);
				standardTagSelections.splice(index, 1);
				}
				this.setState({ standardTagSelections });
				break;
			default:
				console.log('wub wub');
				break;
		}
  }


  onTagDeleteClick = (t) => {
		var subCategoryTagSelections = this.state.subCategoryTagSelections;
		var vibeTagSelections = this.state.vibeTagSelections;
		var materialTagSelections = this.state.materialTagSelections;
		var colorTagSelections = this.state.colorTagSelections;
		var techniqueTagSelections = this.state.techniqueTagSelections;
		var standardTagSelections = this.state.standardTagSelections;

		switch (true) {
			case subCategoryTagSelections.indexOf(t) > -1:
				var index = subCategoryTagSelections.indexOf(t);
				subCategoryTagSelections.splice(index, 1);

				this.setState({ subCategoryTagSelections });
				break;
			case vibeTagSelections.indexOf(t) > -1:
				var index = vibeTagSelections.indexOf(t);
				vibeTagSelections.splice(index, 1);

				this.setState({ vibeTagSelections });
				break;
			case materialTagSelections.indexOf(t) > -1:
				var index = materialsTagSelections.indexOf(t);
				materialsTagSelections.splice(index, 1);

				this.setState({ materialsTagSelections });
				break;
			case colorTagSelections.indexOf(t) > -1:
				var index = colorTagSelections.indexOf(t);
				colorTagSelections.splice(index, 1);

				this.setState({ colorTagSelections });
				break;
			case techniqueTagSelections.indexOf(t) > -1:
				var index = techniqueTagSelections.indexOf(t);
				techniqueTagSelections.splice(index, 1);

				this.setState({ techniqueTagSelections });
				break;
			case standardTagSelections.indexOf(t) > -1:
		    var index = standardTagSelections.indexOf(t);
		    standardTagSelections.splice(index, 1);

		    this.setState({ standardTagSelections });
				break;
			default:
				console.log('wub wub');
				break;
		}
  }


	handleInventoryInputLowendChange = (e) => {
	  var value = e.target.value;
	  var token = e.target.name;

	  var artInventoryInput = this.state.artInventoryInput;
	  var artInventoryTracker = this.state.artInventoryTracker;
	  var index = artInventoryTracker.indexOf(token);

	  artInventoryInput[index][0] = value;

	  this.setState({ artInventoryInput });
	  // console.log(this.state.artInventoryInput);
	}


	handleInventoryInputHighendChange = (e) => {
	  var value = e.target.value;
	  var token = e.target.name;

	  var artInventoryInput = this.state.artInventoryInput;
	  var artInventoryTracker = this.state.artInventoryTracker;
	  var index = artInventoryTracker.indexOf(token);

	  artInventoryInput[index][1] = value;

	  this.setState({ artInventoryInput });
	}

	handleInventoryQuantityChange = (e) => {
	  var value = e.target.value;
	  var token = e.target.name;

	  var artInventoryQuantity = this.state.artInventoryQuantity;
	  var artInventoryTracker = this.state.artInventoryTracker;
	  var index = artInventoryTracker.indexOf(token);

	  artInventoryQuantity[index] = value;

	  this.setState({ artInventoryQuantity });
	}

	handleInventoryPriceChange = (e) => {
	  var value = e.target.value;
	  var token = e.target.name;

	  var artInventoryPrice = this.state.artInventoryPrice;
	  var artInventoryTracker = this.state.artInventoryTracker;
	  var index = artInventoryTracker.indexOf(token);

	  artInventoryPrice[index] = value;

	  this.setState({ artInventoryPrice });
	}

	handleInventorySalePriceChange = (e) => {
	  var value = e.target.value;
	  var token = e.target.name;

	  var artInventorySalePrice = this.state.artInventorySalePrice;
	  var artInventoryTracker = this.state.artInventoryTracker;
	  var index = artInventoryTracker.indexOf(token);

	  artInventorySalePrice[index] = value;

	  this.setState({ artInventorySalePrice });
	}


	handleItemOnSaleSelection = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

		var itemOnSaleDeclarations = this.state.itemOnSaleDeclarations;
    var index = this.state.itemOnSaleTracker.indexOf(name);

		console.log(itemOnSaleDeclarations);

    if ( itemOnSaleDeclarations[0] === "0" ) {
			console.log('if');
      itemOnSaleDeclarations[0] = name;
    } else if (itemOnSaleDeclarations[index]) {
			if (itemOnSaleDeclarations[1]) {
				itemOnSaleDeclarations[index].slice(index, 1);
			} else {
				itemOnSaleDeclarations[0] = "0";
			}
		} else {
			console.log('else');
      itemOnSaleDeclarations[index].push(name);
    }

		console.log(itemOnSaleDeclarations);


		this.setState({ itemOnSaleDeclarations });
  }


	handleInventoryUnitInputDropdownOpen = (e) => {
	  var artInventoryUnitDropdownOpen = this.state.artInventoryUnitDropdownOpen;
	  if (artInventoryUnitDropdownOpen) {
	    artInventoryUnitDropdownOpen = false;
	  } else {
	    artInventoryUnitDropdownOpen = true;
	  }

	  this.setState({ artInventoryUnitDropdownOpen });
	}

	handleInventoryCurrencyInputDropdownOpen = (e) => {
	  var artInventoryCurrencyDropdownOpen = this.state.artInventoryCurrencyDropdownOpen;
	  if (artInventoryCurrencyDropdownOpen) {
	    artInventoryCurrencyDropdownOpen = false;
	  } else {
	    artInventoryCurrencyDropdownOpen = true;
	  }

		console.log(this.state.artInventoryCurrencyDropdownOpen);

	  this.setState({ artInventoryCurrencyDropdownOpen });
	}



	handleInventoryUnitSelection = (e) => {
	  var artInventoryUnit = e.target.innerHTML;
	  this.setState({ artInventoryUnit });
	  this.setState({ artInventoryUnitDropdownOpen: false });
	}


	handleArtInventoryCardAddition = (e) => {
	  var count = `${this.state.artInventoryCount + 1}`;
	  var artInventoryTracker = this.state.artInventoryTracker;
		artInventoryTracker.push(count);

	  var artInventoryInput = this.state.artInventoryInput;
	  artInventoryInput.push(["height", "width"]);

		var artInventoryPrice = this.state.artInventoryPrice;
	  artInventoryPrice.push(["$ _"]);

		var artInventorySalePrice = this.state.artInventorySalePrice;
	  artInventorySalePrice.push(["$ _"]);

		var artInventoryQuantity = this.state.artInventoryQuantity;
	  artInventoryQuantity.push(["#"]);

	  this.setState({
			artInventoryTracker,
			artInventoryCount: parseInt(count),
			artInventoryInput,
			artInventoryPrice,
			artInventorySalePrice,
			artInventoryQuantity
		});
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
                  onChange={this.handleTaggingInputChange}
                  onKeyPress={this.handleTaggingInputKeyPress} />
                <button id="add_item_subcategory_tagging_input_submit_btn" name="subcategory_submit" className="btn btn-primary add_item_tagging_input_submit_btn" onClick={this.handleTaggingInputTagSelection} ></button>
              </div>
              <button name="subcategory_dropdown" className={"btn btn-primary add_item_tagging_dropdown_btn " + (this.state.subCategoryDropdownOpen ? 'no_border_radius_bottom' : 'closed')} onClick={this.handleTaggingDropdownOpen}></button>
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
                      inputClassName="form-checkbox form-control radio_checkbox_label_input"
                      spanClassName="radio_checkbox_label_span"
                      setName={SUBCATEGORIES}
                      controlFunc={this.handleTaggingDropdownTagCheckboxSelection}
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
                      onTagDeleteClick={this.onTagDeleteClick} />
                </Scrollbars>
              </div>
            </div>


            <div id="add_item_article_vibe_tagging_container">
							<div className="add_item_tagging_titlehead_label">Vibe Tagging</div>
							<div className="add_item_tagging_input_container">
								<Field
									id="add_item_vibe_tagging_input"
									className="form-control add_item_tagging_input"
									name="vibe"
									component="input"
									type="text"
									value={this.state.vibeInputValue}
									onChange={this.handleTaggingInputChange}
									onKeyPress={this.handleTaggingInputKeyPress} />
								<button id="add_item_vibe_tagging_input_submit_btn" name="vibe_submit" className="btn btn-primary add_item_tagging_input_submit_btn" onClick={this.handleTaggingInputTagSelection} ></button>
							</div>
							<button name="vibe_dropdown" className={"btn btn-primary add_item_tagging_dropdown_btn " + (this.state.vibeDropdownOpen ? 'no_border_radius_bottom' : 'closed')} onClick={this.handleTaggingDropdownOpen}></button>
							<div className={"add_item_tagging_dropdown_menu " + (this.state.vibeDropdownOpen ? 'show' : 'hidden')}>
								<Scrollbars
									className="add_item_tag_scroll"
									onScroll={this.handleScroll}
									onScrollFrame={this.handleScrollFrame}
									onScrollStart={this.handleScrollStart}
									onScrollStop={this.handlenScrollStop}
									onUpdate={this.handleUpdate}>
									<CheckboxOrRadioGroup
											id="add_item_vibe_tagging_dropdown_menu_tag_options"
											divClassName="add_item_tagging_dropdown_menu_tag_options"
											labelClassName="form-label capitalize dropdown_tag_checkbox_selections"
											inputClassName="form-checkbox form-control radio_checkbox_label_input"
											spanClassName="radio_checkbox_label_span"
											setName={VIBES}
											controlFunc={this.handleTaggingDropdownTagCheckboxSelection}
											type={'checkbox'}
											options={VIBES}
											selectedOptions={this.state.vibeTagSelections} />
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
											id="add_item_vibe_tag_group"
											groupClassName="add_item_selected_tag_group"
											className="add_item_selected_tag"
											closerClassName="add_item_selected_tag_delete_x"
											setName={this.state.vibeTagSelections}
											options={this.state.vibeTagSelections}
											selectedOptions={this.state.vibeTagSelections}
											onTagDeleteClick={this.onTagDeleteClick} />
								</Scrollbars>
							</div>
						</div>


            <div id="add_item_article_material_tagging_container">
							<div className="add_item_tagging_titlehead_label">Material Tagging</div>
							<div className="add_item_tagging_input_container">
								<Field
									id="add_item_material_tagging_input"
									className="form-control add_item_tagging_input"
									name="material"
									component="input"
									type="text"
									value={this.state.materialInputValue}
									onChange={this.handleTaggingInputChange}
									onKeyPress={this.handleTaggingInputKeyPress} />
								<button id="add_item_material_tagging_input_submit_btn" name="material_submit" className="btn btn-primary add_item_tagging_input_submit_btn" onClick={this.handleTaggingInputTagSelection} ></button>
							</div>
							<button name="material_dropdown" className={"btn btn-primary add_item_tagging_dropdown_btn " + (this.state.materialDropdownOpen ? 'no_border_radius_bottom' : 'closed')} onClick={this.handleTaggingDropdownOpen}></button>
							<div className={"add_item_tagging_dropdown_menu " + (this.state.materialDropdownOpen ? 'show' : 'hidden')}>
								<Scrollbars
									className="add_item_tag_scroll"
									onScroll={this.handleScroll}
									onScrollFrame={this.handleScrollFrame}
									onScrollStart={this.handleScrollStart}
									onScrollStop={this.handlenScrollStop}
									onUpdate={this.handleUpdate}>
									<CheckboxOrRadioGroup
											id="add_item_material_tagging_dropdown_menu_tag_options"
											divClassName="add_item_tagging_dropdown_menu_tag_options"
											labelClassName="form-label capitalize dropdown_tag_checkbox_selections"
											inputClassName="form-checkbox form-control radio_checkbox_label_input"
											spanClassName="radio_checkbox_label_span"
											setName={MATERIALS}
											controlFunc={this.handleTaggingDropdownTagCheckboxSelection}
											type={'checkbox'}
											options={MATERIALS}
											selectedOptions={this.state.materialTagSelections} />
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
											id="add_item_material_tag_group"
											groupClassName="add_item_selected_tag_group"
											className="add_item_selected_tag"
											closerClassName="add_item_selected_tag_delete_x"
											setName={this.state.materialTagSelections}
											options={this.state.materialTagSelections}
											selectedOptions={this.state.materialTagSelections}
											onTagDeleteClick={this.onTagDeleteClick} />
								</Scrollbars>
							</div>
						</div>


	          <div id="add_item_article_color_tagging_container">
							<div className="add_item_tagging_titlehead_label">Color Tagging</div>
							<div className="add_item_tagging_input_container">
								<Field
									id="add_item_color_tagging_input"
									className="form-control add_item_tagging_input"
									name="color"
									component="input"
									type="text"
									value={this.state.colorInputValue}
									onChange={this.handleTaggingInputChange}
									onKeyPress={this.handleTaggingInputKeyPress} />
								<button id="add_item_color_tagging_input_submit_btn" name="color_submit" className="btn btn-primary add_item_tagging_input_submit_btn" onClick={this.handleTaggingInputTagSelection} ></button>
							</div>
							<button name="color_dropdown" className={"btn btn-primary add_item_tagging_dropdown_btn " + (this.state.colorDropdownOpen ? 'no_border_radius_bottom' : 'closed')} onClick={this.handleTaggingDropdownOpen}></button>
							<div className={"add_item_tagging_dropdown_menu " + (this.state.colorDropdownOpen ? 'show' : 'hidden')}>
								<Scrollbars
									className="add_item_tag_scroll"
									onScroll={this.handleScroll}
									onScrollFrame={this.handleScrollFrame}
									onScrollStart={this.handleScrollStart}
									onScrollStop={this.handlenScrollStop}
									onUpdate={this.handleUpdate}>
									<CheckboxOrRadioGroup
											id="add_item_color_tagging_dropdown_menu_tag_options"
											divClassName="add_item_tagging_dropdown_menu_tag_options"
											labelClassName="form-label capitalize dropdown_tag_checkbox_selections"
											inputClassName="form-checkbox form-control radio_checkbox_label_input"
											spanClassName="radio_checkbox_label_span"
											setName={COLORS}
											controlFunc={this.handleTaggingDropdownTagCheckboxSelection}
											type={'checkbox'}
											options={COLORS}
											selectedOptions={this.state.colorTagSelections} />
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
											id="add_item_color_tag_group"
											groupClassName="add_item_selected_tag_group"
											className="add_item_selected_tag"
											closerClassName="add_item_selected_tag_delete_x"
											setName={this.state.colorTagSelections}
											options={this.state.colorTagSelections}
											selectedOptions={this.state.colorTagSelections}
											onTagDeleteClick={this.onTagDeleteClick} />
								</Scrollbars>
							</div>
						</div>


            <div id="add_item_article_technique_tagging_container">
							<div className="add_item_tagging_titlehead_label">Technique Tagging</div>
							<div className="add_item_tagging_input_container">
								<Field
									id="add_item_technique_tagging_input"
									className="form-control add_item_tagging_input"
									name="technique"
									component="input"
									type="text"
									value={this.state.techniqueInputValue}
									onChange={this.handleTaggingInputChange}
									onKeyPress={this.handleTaggingInputKeyPress} />
								<button id="add_item_technique_tagging_input_submit_btn" name="technique_submit" className="btn btn-primary add_item_tagging_input_submit_btn" onClick={this.handleTaggingInputTagSelection} ></button>
							</div>
							<button name="technique_dropdown" className={"btn btn-primary add_item_tagging_dropdown_btn " + (this.state.techniqueDropdownOpen ? 'no_border_radius_bottom' : 'closed')} onClick={this.handleTaggingDropdownOpen}></button>
							<div className={"add_item_tagging_dropdown_menu " + (this.state.techniqueDropdownOpen ? 'show' : 'hidden')}>
								<Scrollbars
									className="add_item_tag_scroll"
									onScroll={this.handleScroll}
									onScrollFrame={this.handleScrollFrame}
									onScrollStart={this.handleScrollStart}
									onScrollStop={this.handlenScrollStop}
									onUpdate={this.handleUpdate}>
									<CheckboxOrRadioGroup
											id="add_item_technique_tagging_dropdown_menu_tag_options"
											divClassName="add_item_tagging_dropdown_menu_tag_options"
											labelClassName="form-label capitalize dropdown_tag_checkbox_selections"
											inputClassName="form-checkbox form-control radio_checkbox_label_input"
											spanClassName="radio_checkbox_label_span"
											setName={TECHNIQUES}
											controlFunc={this.handleTaggingDropdownTagCheckboxSelection}
											type={'checkbox'}
											options={TECHNIQUES}
											selectedOptions={this.state.techniqueTagSelections} />
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
											id="add_item_technique_tag_group"
											groupClassName="add_item_selected_tag_group"
											className="add_item_selected_tag"
											closerClassName="add_item_selected_tag_delete_x"
											setName={this.state.techniqueTagSelections}
											options={this.state.techniqueTagSelections}
											selectedOptions={this.state.techniqueTagSelections}
											onTagDeleteClick={this.onTagDeleteClick} />
								</Scrollbars>
							</div>
						</div>


            <div id="add_item_article_tag_tagging_container">
							<div className="add_item_tagging_titlehead_label">Standard Tagging</div>
							<div className="add_item_tagging_input_container">
								<Field
									id="add_item_standard_tagging_input"
									className="form-control add_item_tagging_input"
									name="standard_tag"
									component="input"
									type="text"
									value={this.state.standardInputValue}
									onChange={this.handleTaggingInputChange}
									onKeyPress={this.handleTaggingInputKeyPress} />
								<button id="add_item_standard_tagging_input_submit_btn" name="standard_tag_submit" className="btn btn-primary add_item_tagging_input_submit_btn" onClick={this.handleTaggingInputTagSelection} ></button>
							</div>
							<button name="standard_tag_dropdown" className={"btn btn-primary add_item_tagging_dropdown_btn " + (this.state.standardTagDropdownOpen ? 'no_border_radius_bottom' : 'closed')} onClick={this.handleTaggingDropdownOpen}></button>
							<div className={"add_item_tagging_dropdown_menu " + (this.state.standardTagDropdownOpen ? 'show' : 'hidden')}>
								<Scrollbars
									className="add_item_tag_scroll"
									onScroll={this.handleScroll}
									onScrollFrame={this.handleScrollFrame}
									onScrollStart={this.handleScrollStart}
									onScrollStop={this.handlenScrollStop}
									onUpdate={this.handleUpdate}>
									<CheckboxOrRadioGroup
											id="add_item_standard_tagging_dropdown_menu_tag_options"
											divClassName="add_item_tagging_dropdown_menu_tag_options"
											labelClassName="form-label capitalize dropdown_tag_checkbox_selections"
											inputClassName="form-checkbox form-control radio_checkbox_label_input"
											spanClassName="radio_checkbox_label_span"
											setName={TAGS}
											controlFunc={this.handleTaggingDropdownTagCheckboxSelection}
											type={'checkbox'}
											options={TAGS}
											selectedOptions={this.state.standardTagSelections} />
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
											id="add_item_standard_tag_group"
											groupClassName="add_item_selected_tag_group"
											className="add_item_selected_tag"
											closerClassName="add_item_selected_tag_delete_x"
											setName={this.state.standardTagSelections}
											options={this.state.standardTagSelections}
											selectedOptions={this.state.standardTagSelections}
											onTagDeleteClick={this.onTagDeleteClick} />
								</Scrollbars>
							</div>
						</div>

          </div>





          <div id="add_item_article_inventory_container">
            <div id="add_item_inventory_container_empty_message" className={"" + (this.state.selectedCategory[0] ? 'hidden' : 'show')}>
              Select A Category To Render Sizing Field
            </div>

            <ArtInventoryField
              selectedCategory={this.state.selectedCategory}

              handleInventoryUnitInputDropdownOpen={this.handleInventoryUnitInputDropdownOpen}
							handleInventoryCurrencyInputDropdownOpen={this.handleInventoryCurrencyInputDropdownOpen}

              handleInventoryUnitSelection={this.handleInventoryUnitSelection}
							handleInventoryCurrencySelection={this.handleInventoryCurrencySelection}

              handleInventoryInputLowendChange={this.handleInventoryInputLowendChange}
              handleInventoryInputHighendChange={this.handleInventoryInputHighendChange}

							handleInventoryQuantityChange={this.handleInventoryQuantityChange}

							handleInventoryPriceChange={this.handleInventoryPriceChange}

							handleInventorySalePriceChange={this.handleInventorySalePriceChange}

							handleItemOnSaleSelection={this.handleItemOnSaleSelection}



              handleArtInventoryInputAddition={this.handleArtInventoryInputAddition}



              artInventoryUnitDropdownOpen={this.state.artInventoryUnitDropdownOpen}
							artInventoryCurrencyDropdownOpen={this.state.artInventoryCurrencyDropdownOpen}
							artInventoryUnit={this.state.artInventoryUnit}
							artInventoryCurrency={this.state.artInventoryCurrency}
							measurementUnits={measurement_units}
							currencies={currencies}

              artInventoryTracker={this.state.artInventoryTracker}
              artInventoryInput={this.state.artInventoryInput}
							artInventoryQuantity={this.state.artInventoryQuantity}
							artInventoryPrice={this.state.artInventoryPrice}
							artInventorySalePrice={this.state.artInventorySalePrice}
							itemOnSaleTracker={this.state.itemOnSaleTracker}
							itemOnSaleDeclarations={this.state.itemOnSaleDeclarations}

							handleArtInventoryCardAddition={this.handleArtInventoryCardAddition}

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

            <ShippingCardTableRowGroup
              containerID="add_item_shipping_table_container"
              tableID="add_item_shipping_table"
              theadID="add_item_shipping_head"
              tbodyID="add_item_shipping_body"
              inputOneItemClassName="add_item_article_shipping_input add_item_article_shipping_input_one_item"
              inputAdditionalItemsClassName="add_item_article_shipping_input add_item_article_shipping_additional_items"

              headerOptions={['Destination', 'One Item', 'Each Additional Item']}

              bodyOptions={this.state.shippingDestinations}
              value={this.state.shippingDestinationCosts}
              handleOneItemShippingCost={this.handleOneItemShippingCost}
              handleEachAdditionalItemShippingCost={this.handleEachAdditionalItemShippingCost}
              addAdditionalRow={this.handleAdditionalShippingDestination}
            />
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













*/
