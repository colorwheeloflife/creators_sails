import React from 'react'
import { Field, reduxForm } from 'redux-form'

let AddItemForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="itemName">Item Name</label>
        <Field name="itemName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="itemDescription">Item Description</label>
        <Field name="itemDescription" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="itemPrice">Price</label>
        <Field name="itemPrice" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

AddItemForm = reduxForm({
  form: 'additem'
})(AddItemForm)

export default AddItemForm;
