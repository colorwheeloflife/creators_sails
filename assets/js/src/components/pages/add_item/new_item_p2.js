import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form-6';
import * as actions from '../../../actions';

const NewItemP2 = props => {
  const { handleSubmit, previousPage, fields: { intention_statement }} = props;
  console.log(props);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-8'>
          <h2 className='page_header'> Item Identity </h2>
          <form id="signin_form" className="auth_form" onSubmit={handleSubmit}>

            <fieldset className="form-group">
              <label>Intention Statement:</label>
              <input className="form-control" {...intention_statement} />
            </fieldset>

            <button type="button" className="btn btn-primary previous wizard_form_buttons" onClick={previousPage}> Previous </button>
            <button action="submit" className="btn btn-primary wizard_form_buttons"> Next </button>
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
  fields: ['intention_statment'],
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
}, mapStateToProps, actions)(NewItemP2);
