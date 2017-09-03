import React, { Component } from 'react';
import CurrencyInput from 'react-currency-input';

export default class InventoryInput extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'large']),
    size_inputs: PropTypes.number,
    grouping: PropTypes.boolean
  }

  constructor(props) {
    super(props);

    this.state = {
      size_inputs: props.size_inputs || 0,
      size_values: [0],
      price: 0,
      sale_price: 0,
      on_sale: false,
      quantity: 0
    }
  }

  handleSetSizeCount = (array) => {
    this.setState({ size_values: array });
  }

  handleSizeValueChange = (e) => {
    var value = e.target.value;
    var index = e.target.name;
	  var size_values = this.state.size_values;
	  size_values[index] = value;

	  this.setState({ size_values });
  }

  handlePriceChange = (e) => {
    var value = e.target.value;
    var name = e.target.name;

    switch (name) {
      case "price":
        this.setState({ price: value });
        break;
      case "sale_price":
        this.setState({ sale_price: value });
        break;
      default:
        break;
    }
  }

  handleQuantityChange = (e) => {
    this.setState({ quantity = e.target.value });
  }


  render() {
    const { size_inputs, size_values, price, sale_price, on_sale, quantity } = this.state;
    const { size, grouping } = this.props;

    const containerClass = Styler(
      "inventory_input_container",
      size
    );

    const inventoryInputClass = Styler(
      "inventory_input",
      grouping ? "grouping" : null,
      size
    );

    const deletionClass = Styler(
      "delete_btn",
      grouping ? null : 'hidden',
      size
    );

    const sizeInputs = function() {
      var count = size_inputs;
      var inputs = [];
      var placeholders = ["length"];

      switch (count) {
        case 0:
          return;
        case 1:
          inputs = [0];
          this.handleSetSizeCount(inputs);
          break;
        case 2:
          inputs = [0, 0];
          this.handleSetSizeCount(inputs);
          placeholders = ["height", "width"];
        case 3:
          inputs = [0, 0, 0];
          this.handleSetSizeCount(inputs);
          placeholders = ["height", "width", "depth"];
      }

      inputs.map((input, index) => {
        return (
          <input
            className="size"
            type="text"
            name={index}
            placeholder={placeholders[index]}
            value={size_values[index]}
            onChange{event => this.handleSizeValueChange()}/>
        )
      });
    };

    return (
      <div className={ containerClass }>
        <div className={ inventoryInputClass }>

          <div className="sizing_container">
            { sizeInputs }
          </div>

          <div className="price_container">
            <CurrencyInput
              prefix="$"
              className="price"
              name="price"
              type="text"
              value={ price }
              onChangeEvent={ this.handlePriceChange() } />

            <Checkbox
              name="On Sale?"
              className="on_sale" />

            <CurrencyInput
              prefix="$"
              className="sale_price"
              name="sale_price"
              type="text"
              value={ sale_price }
              onChangeEvent={ this.handlePriceChange() } />
          </div>

          <div className="quantity_container">
            <input
              className="quantity"
              name={}
              type="text"
              placeholder="#"
              value={ quantity }
              onChange={ this.handleQuantityChange() }/>
          </div>
        </div>

        <div
          className={ deletionClass }
          name={}
          onClick={}>
          -
        </div>

      </div>
    )
  }
}
