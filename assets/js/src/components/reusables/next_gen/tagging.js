import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}



export default class Tagging extends Component {
  static propTypes = {
    size: propTypes.oneOf(['small', 'large']),
    variety: propTypes.oneOf(['subcategory', 'vibe', 'material', 'color', 'technique', 'standard'])
  }

  constructor(props) {
    super(props);

    this.state = {
      variety: capitalize(props.variety),
      input_value: "",
      tags: []
    }
  }

  handleInputValueChange = (e) => {
    this.setState({ input_value: e.taget.value });
  }

  handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleTagAddition(e);
    }
  }

  handleTagAddition = (e) => {
    var tag = this.state.input_value;
    var tags = this.state.tags;
    tags.push(tag);

    this.setState({
      input_value: "",
      tags
    });
  }


  render() {
    const { variety, input_value, tags } = this.state;
    const {  } = this.props;

    const taggingClass = Styler(
      "tagging",
      size
    );

    return (
      <div className={ taggingClass }>
        <label className="title">
          { variety }
        </label>
        <div className="top">
          <div className="input_container">
            <input
              className="input"
              component="input"
              type="text"
              value={ input_value }
              onChange={ this.handleInputValueChange() }
              onKeyPress={ this.handleInputKeyPress() }/>
            <button className="submit" onClick={ event => this.handleTagAddition() }>add</button>
          </div>
          <DropdownCheckboxes
            list={TAG_OPTIONS}
            columns={2} />
        </div>

        <div className="selected_tags">
          <Scrollbars
            className="add_item_tag_scroll"
            onScroll={this.handleScroll}
            onScrollFrame={this.handleScrollFrame}
            onScrollStart={this.handleScrollStart}
            onScrollStop={this.handlenScrollStop}
            onUpdate={this.handleUpdate}>
            <TagGroup
                list={ tags }
                delete={ event => this.handleDeleteTag() } />
          </Scrollbars>
        </div>
      </div>
    )
  }
}
