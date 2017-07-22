import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../../actions';

import AddItemForm from './AddItemForm';

class AddItemPage extends React.Component {

  componentDidMount() {
    var items = this.props.actions.fetchItems();
    console.log(items);
  }

  submit = (values) => {
    this.props.actions.basicAddItem(values);
  }

  render() {
    return (
      <AddItemForm onSubmit={this.submit} />
    )
  }
}

const mapStateToProps = state => ({
  items: state.items
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

AddItemPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItemPage);

export default AddItemPage;
