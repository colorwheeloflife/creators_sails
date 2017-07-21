import React from 'react'
import AddItemForm from './AddItemForm'

class AddItemPage extends React.Component {
  submit = (values) => {
    console.log(values)
  }
  render() {
    return (
      <AddItemForm onSubmit={this.submit} />
    )
  }
}

export default AddItemPage;
