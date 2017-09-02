/**
 * Inventory.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    price: {
      type: 'number'
    },

    sale_price: {
      type: 'number'
    },

    on_sale: {
      type: 'boolean'
    },

    quantity: {
      type: 'number'
    },

    item: {
      model: 'item'
    },

    size: {
      collection: 'size',
      via: 'inventory'
    },

    variation: {
      model: 'variation'
    }

  }
};
