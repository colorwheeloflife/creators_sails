/**
 * Item.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string'
    },

    description: {
      type: 'string'
    },

    intention: {
      type: 'string'
    },

    price: {
      type: 'number'
    },

    sale_price: {
      type: 'number'
    },

    on_sale: {
      type: 'boolean'
    },

    publishing_status: {
      type: 'string'
    },



    shop: {
      model: 'shop'
    },

    category: {
      model: 'category'
    },

    tags: {
      collection: 'tag',
      via: 'items'
    }

  }
};
