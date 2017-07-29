import React from 'react';
import { Field, reduxForm } from 'redux-form-6';
import * as actions from '../../../actions';

const NewItemP1 = props => {
  const { handleSubmit, fields: { item_name, item_description, item_category, item_subcategories } } = props;
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-8'>
          <h2 className='page_header'> Item Profile </h2>
          <form id="wizard" className="auth_form" onSubmit={handleSubmit}>

            <fieldset className="form-group">
              <label>Item Name:</label>
              <input className="form-control" {...item_name} />
            </fieldset>

            <fieldset className="form-group bottom_cushion">
              <label>Item Description:</label>
              <input className="form-control" {...item_description} />
            </fieldset>

            <fieldset className="form-group radio_box">
              <label>Item Category:</label>
              <div className="radio_choice_div">
                <input
                  className="radio_input"
                  id="radio_category_visual_art"
                  name="item_category"
                  type="radio"
                  value="visual_art"
                  {...item_category} />
                <label className="radio_label" for="radio_category_visual_art">Visual Art</label>
              </div>
              <div className="radio_choice_div">
                <input
                  className="radio_input"
                  id="radio_category_clothing"
                  name="item_category"
                  type="radio"
                  value="clothing"
                  {...item_category} />
                <label className="radio_label" for="radio_category_clothing">Clothing & Accessories</label>
              </div>
              <div className="radio_choice_div">
                <input
                  className="radio_input"
                  id="radio_category_jewelry"
                  name="item_category"
                  type="radio"
                  value="jewelry"
                  {...item_category} />
                <label className="radio_label" for="radio_category_jewelry">Jewelry</label>
              </div>
            </fieldset>

            <fieldset className="form-group checkbox_box">
              <label>Item Subcategories:</label>

              <div className="checkbox_choice_div">
                <input
                  className="checkbox_input"
                  id="checkbox_subcategory_option1"
                  name="option1"
                  type="checkbox"
                  value="option1"
                  {...item_subcategories} />
                <label className="checkbox_label" for="checkbox_subcategory_option1">Option1</label>
              </div>

              <div className="checkbox_choice_div">
                <input
                  className="checkbox_input"
                  id="checkbox_subcategory_option2"
                  name="option2"
                  type="checkbox"
                  value="option2"
                  {...item_subcategories} />
                <label className="checkbox_label" for="checkbox_subcategory_option2">Option2</label>
              </div>

              <div className="checkbox_choice_div">
                <input
                  className="checkbox_input"
                  id="checkbox_subcategory_option1"
                  name="option3"
                  type="checkbox"
                  value="option3"
                  {...item_subcategories} />
                <label className="checkbox_label" for="checkbox_subcategory_option3">Option3</label>
              </div>

            </fieldset>

            <button action="submit" className="btn btn-primary wizard_form_buttons">Next</button>
          </form>
        </div>
        <div className='col-md-2'></div>
      </div>
    </div>
  );

}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  fields: ['item_name', 'item_description', 'item_category', 'item_subcategories'],
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
}, mapStateToProps, actions)(NewItemP1);
