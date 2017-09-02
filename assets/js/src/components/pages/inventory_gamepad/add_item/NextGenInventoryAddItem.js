import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { Scrollbars } from 'react-custom-scrollbars';
import Dropzone from 'react-dropzone';

/* Put reusables here */

class InventoryAddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }


  render() {
    const { selectedCategory, articleType } = this.state;
    const { isShowing } = this.props;

    const files = this.state.files.map((file) => <img key={file.name} src={file.preview} className="picture_preview"/>)

    const addItemClass = Styler(
      isShowing ? "" : "hidden"
    );

    const articleTypeClass = Styler(
      (selectedCategory === 'Clothing' || 'Jewelry') ? null : 'hidden'
    );

    const noCategorySelectedClass = Styler(
      "select_category_message",
      selectedCategory[0] ? 'hidden' : null
    );

    const unitClass = Styler(
      "unit_field_container",
      (selectedCategory === 'Visual Art' || 'Jewelry') ? null : 'hidden'
    );

    const articleTypeList = function() {
      switch (selectedCategory) {
        case 'Clothing':
          return CLOTHING_ARTICLE_TYPES;
        case 'Jewelry':
          return JEWELRY_ARTICLE_TYPES;
        default:
          break;
      }
    };

    const jewelryArticleSizing = function() {
      if (selectedCategory === 'Jewelry') {
        switch (articleType) {
          case 'Bracelet':
            return 1;
          case 'Earring':
            return 1;
          case 'Necklace':
            return 1;
          case 'Ring':
            return 1;
          default:
            return;
        }
      }
    }

    const inventoryField = function() {
      if (selectedCategory) {
        switch (selectedCategory) {
          case 'Visual Art':
            return <div className="inventory_input art">
              <InventoryInputGroup
                sizing={2}
                rows={1}
                maximum={10} />
            </div>
          case 'Clothing':
            return <div className="inventory_input clothing">
              <ClothingSizeBar />
              <InventoryInput />
            </div>
          case 'Jewelry':
            return <div className="inventory_input jewelry">
              <InventoryInputGroup
                sizing={jewelryArticleSizing}
                rows={1}
                maximum={10} />
            </div>
          default:
            <InventoryInput />
            break;
        }
      }
    }

    return (
      <div id="inventory_add_item" className={ addItemClass }>
        <div className="title">Add New Item</div>

        <div className="name_field_container">
          <Input
            name="Name"
            component="text"/>
        </div>

        <div className="picture_upload_container">
          <div className="dropzone">
            <Dropzone ref="dropzone" className="pad" onDrop={this.onDrop} >
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
            <button type="button" className="btn btn-primary upload_btn" onClick={this.onDropzoneOpenClick}>
                Open From Files
            </button>
          </div>
          {this.state.files ? <div className="previews_container">
            <Scrollbars
              className="scroll"
              onScroll={this.handleScroll}
              onScrollFrame={this.handleScrollFrame}
              onScrollStart={this.handleScrollStart}
              onScrollStop={this.handleScrollStop}
              onUpdate={this.handleUpdate}>
              <div>{files}</div>
            </Scrollbars>
          </div> : null}
        </div>

        <div className="description_field_container">
          <Input
            name="Name"
            component="textarea"/>
        </div>

        <div className="intention_field_container">
          <Input
            name="Name"
            component="textarea"/>
        </div>

        <div className="column_1">
          <div className="category_field_container">
            <RadioGroup
              name="Category"
              list={ CATEGORIES }
              orientation="vertical"/>
          </div>

          <div className={"article_type_field_container " + ArticleTypeClass}>
            <RadioGroup
              name="Article Type"
              list={ articleTypeList }
              orientation="vertical"/>
          </div>

          <div className="time_log_field_container">
            <div className="inputs_container">
              <Input
                name="Hours"
                component="text"/>
              <Input
                name="Minutes"
                component="text"/>
            </div>
            <RadioGroup
              list=["exact", "approximate"]
              orientation="horizontal"/>
          </div>
        </div>

        <div className="column_2">
          <div className="tagging_field_container">
            <Tagging
              name="Subcategories" />
          </div>

          <div className="tagging_field_container">
            <Tagging
              name="Vibes" />
          </div>

          <div className="tagging_field_container">
            <Tagging
              name="Materials" />
          </div>

          <div className="tagging_field_container">
            <Tagging
              name="Colors" />
          </div>

          <div className="tagging_field_container">
            <Tagging
              name="Techniques" />
          </div>

          <div className="tagging_field_container">
            <Tagging
              name="Tags" />
          </div>
        </div>

        <div className="inventory_field_container">
          <div className={ noCategorySelectedClass }>
            Please select a category to render field
          </div>

          <div className={ unitClass }>
            <Dropdown
              size="small",
              list={UNITS}
              initial={0} />
          </div>

          <div className="currency_field_container">
            <Dropdown
              size="small",
              list={CURRENCIES}
              initial={0} />
          </div>

          { inventoryField }
        </div>

        <div className="shipping_field_container">
          <div className="processing_field_container">
            <Dropdown
              name="Shipping Origin"
              list={PROVINCES_OR_STATES}/>
            <Dropdown
              name="Processing Time"
              list={PROCESSING_TIME_OPTIONS}/>
          </div>

          <table className="shipping_destinations">
            <thead></thead>
            <tbody>
              { shippingDestinations } // more to do here
            </tbody>
          </table>
        </div>

        <Button
          onClick={this.handleSubmit}
          type="submit">
          Submit
        </button>
      </div>
    );
  }
}


InventoryGamePadAddItemForm = reduxForm({
  form: 'GamePadAddItem'
})(InventoryGamePadAddItemForm)

export default InventoryGamePadAddItemForm;
