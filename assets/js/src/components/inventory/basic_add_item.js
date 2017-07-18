import React, { Component } from 'react';
import { reduxForm } from 'redux-form-6';
import * as actions from '../../actions';

// console.log('trying');

class BasicAddItem extends Component {

  handleFormSubmit({ name, description, price }) {
    console.log(this.props);
    console.log(name);
    actions.basicAddItem({ name, description, price });
  }

  componentDidMount() {
    console.log(this.state);
    actions.fetchItems();
  }

  render() {
    const { handleSubmit, fields: { name, description, price }} = this.props;
  
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8'>
            <form id="basic_add_item" className="standard_form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

              <fieldset className="form-group">
                <label>Item Name:</label>
                <input {...name} className="form-control" />
              </fieldset>

              <fieldset className="form-group">
                <label>Description:</label>
                <input {...description} className="form-control" />
              </fieldset>

              <fieldset className="form-group">
                <label>Price:</label>
                <input {...price} className="form-control" />
              </fieldset>

              {this.renderAlert()}
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
  fields: ['name', 'description', 'price']
}, mapStateToProps, actions)(BasicAddItem);
