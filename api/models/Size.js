/**
 * Size.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string'
    },

    dimensions: {
      type: 'string'
    },

    unit: {
      type: 'string'
    },

    inventory: {
      collection: 'inventory',
      via: 'size'
    }
    
  }
};
