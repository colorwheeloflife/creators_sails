import React from 'react'

const ShippingCardTableRowGroup = (props) => (
  <div id={props.containerID}>
    <table id={props.tableID} className="table table-responsive table-hover">
      <thead id={props.theadID}>
        <tr>
        {props.headerOptions.map(header => {
          return (
            <th key={header}>{header}</th>
          );
        })}
        </tr>
      </thead>

      <tbody id={props.tbodyID}>
      	{props.bodyOptions.map(option => {
      		return (
      			<tr key={option}>
      				<td>{option}</td>
      				<td>
                <input
                  className={props.inputOneItemClassName}
                  name={option}
                  type="text"
                  value={props.value[ props.bodyOptions.indexOf(option) ][0]}
                  onChange={props.handleOneItemShippingCost} />
      				</td>
      				<td>
                <input
                  className={props.inputAdditionalItemsClassName}
                  name={option}
                  type="text"
                  value={props.value[ props.bodyOptions.indexOf(option) ][1]}
                  onChange={props.handleEachAdditionalItemShippingCost} />
      				</td>
      			</tr>
      		);
      	})}
      </tbody>
    </table>
    <div id="add_item_add_additional_shipping_destinations_btn" onClick={props.addAdditionalRow}> + </div>
  </div>
);

export default ShippingCardTableRowGroup;


/*






*/
