import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../../actions';

import GamePadAddItemForm from './GamePadAddItemForm';

class GamePadAddItemPage extends Component {
  componentDidMount() {
    // console.log('state', this.props);
    var items = this.props.actions.fetchItems();
  }

  submit = (values) => {
    this.props.actions.basicAddItem(values);
  }

  render() {
    return (
      <GamePadAddItemForm onSubmit={this.submit} />
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

GamePadAddItemForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(GamePadAddItemForm);


export default GamePadAddItemPage;
