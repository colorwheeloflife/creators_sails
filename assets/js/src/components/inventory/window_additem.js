import React, { Component } from 'react';

class WindowAddItem extends Component {
  render () {
		return (
      <div id="add_item_container">
        <h1 className="inventory_gamepad_content_window_title"> Add Item </h1>
        <div id="add_item_titlehead_container"> Title Name </div>
        <div id="add_item_picture_reel_container"> Picture Reel </div>
        <div id="add_item_intention_statement_container"> Intention Statement </div>



        <div id="add_item_post_description_col_1">
          <div id="add_item_category_selection_container"> Category Selection </div>
          <div id="add_item_article_type_container"> Article Type </div>
          <div id="add_item_article_time_log_container"> Time Log </div>
        </div>


        <div id="add_item_post_description_col_2">
          <div id="add_item_article_subcategory_tagging_container"> Subcategory Tagging </div>
          <div id="add_item_article_vibe_tagging_container"> Vibe Tagging </div>
          <div id="add_item_article_material_tagging_container"> Material Tagging </div>
          <div id="add_item_article_color_tagging_container"> Color Tagging </div>
          <div id="add_item_article_technique_tagging_container"> Technique Tagging </div>
          <div id="add_item_article_tag_tagging_container"> Tag Tagging </div>
        </div>

        <div id="add_item_description_statement_container"></div>

        <div id="add_item_article_sizing_container"> Sizing </div>
        <div id="add_item_article_pricing_container"> Pricing </div>
        <div id="add_item_article_shipping_container"> Shipping </div>
        <div id="add_item_article_placement_container"> Placement </div>

        <button id="add_item_submission_btn" className="btn btn-primary"> Submit </button>




      </div>
		);
	}
}


export default WindowAddItem;




/*



*/
