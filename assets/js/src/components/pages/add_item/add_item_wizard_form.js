import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form-6';
import PropTypes from 'prop-types'
import NewItemP1 from './new_item_p1';
import NewItemP2 from './new_item_p2';
import NewItemP3 from './new_item_p3';
import * as actions from '../../../actions';

console.log(PropTypes);

class WizardForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (
      <div>
        {page === 1 && <NewItemP1 onSubmit={this.nextPage} />}
        {page === 2 &&
          <NewItemP2
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />}
        {page === 3 &&
          <NewItemP3
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />}
      </div>
    )
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default WizardForm
