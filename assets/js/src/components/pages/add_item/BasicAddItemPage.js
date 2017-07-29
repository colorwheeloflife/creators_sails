import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../../../actions';

import BasicAddItemForm from './BasicAddItemForm';

class BasicAddItemPage extends React.Component {

  componentDidMount() {
    console.log('state', this.props);
    var items = this.props.actions.fetchItems();
    console.log('items', items);
  }

  submit = (values) => {
    console.log(values);
    this.props.actions.basicAddItem(values);
  }

  render() {
    return (
      <BasicAddItemForm onSubmit={this.submit} />
    )
  }
}

const mapStateToProps = state => ({
  items: state.items,
  testing: state.testing
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

BasicAddItemPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicAddItemPage);

export default BasicAddItemPage;
