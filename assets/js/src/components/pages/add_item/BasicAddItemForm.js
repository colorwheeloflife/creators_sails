import React from 'react'
import { Field, reduxForm } from 'redux-form'

let BasicAddItemForm = props => {
  const { handleSubmit } = props
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-8'>
          <form className="standard_form" onSubmit={ handleSubmit }>

            <div className="">
              <label htmlFor="name">Item Name</label>
              <Field className="form-control" name="name" component="input" type="text" />
            </div>

            <div className="form-group">
              <label htmlFor="description">Item Description</label>
              <Field className="form-control" name="description" component="input" type="text" />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price</label>
              <Field className="form-control" name="price" component="input" type="text" />
            </div>

            <button type="submit" className="btn btn-primary"> Submit </button>
          </form>
        </div>
        <div className='col-md-2'></div>
      </div>
    </div>
  )
}

BasicAddItemForm = reduxForm({
  form: 'additem'
})(BasicAddItemForm)

export default BasicAddItemForm;
