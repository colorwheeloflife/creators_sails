import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class BasicAddItem extends Component {
  handleFormSubmit(formProps) {
    console.log(this);
    console.log(formProps);

    actions.basicAddItem(formProps);
  }

  componentDidMount() {
    // console.log(this.state);
    // actions.fetchItems();
  }

  render() {
    const { handleSubmit, fields: { name, description, price }} = this.props;

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8'>
            <form id="basic_add_item_form" className="standard_form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

              <fieldset className="form-group">
                <label>Item Name:</label>
                <input className="form-control" {...name} />
              </fieldset>

              <fieldset className="form-group">
                <label>Description:</label>
                <input className="form-control" {...description} />
              </fieldset>

              <fieldset className="form-group">
                <label>Price:</label>
                <input className="form-control" {...price} />
              </fieldset>

              <button action="submit" className="btn btn-primary">Add Item</button>

            </form>
          </div>
          <div className='col-md-2'></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return;
}

export default reduxForm({
  form: 'basic_add_item',
  fields: ['name', 'price', 'description']
}, mapStateToProps, actions)(BasicAddItem);
