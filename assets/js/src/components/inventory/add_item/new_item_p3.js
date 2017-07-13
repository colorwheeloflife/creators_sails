import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form-6';
import * as actions from '../../../actions';

const NewItemP3 = props => {
  const { handleSubmit, previousPage, fields: { item_price }} = props;
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-8'>
          <h2 className='page_header'> Item Identity </h2>
          <form id="signin_form" className="auth_form" onSubmit={handleSubmit}>

            <fieldset className="form-group">
              <label>Price:</label>
              <input className="form-control"
                component={currencyInput}
                {...item_price} />
            </fieldset>

            <button type="button" className="btn btn-primary previous wizard_form_buttons" onClick={previousPage}> Previous </button>
            <button action="submit" className="btn btn-primary wizard_form_buttons"> Submit </button>
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
  fields: ['item_price'],
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
}, mapStateToProps, actions)(NewItemP3);
