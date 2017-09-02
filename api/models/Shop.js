/**
 * Shop.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string'
    },

    location: {
      type: 'string'
    },

    description: {
      type: 'string'
    },

    intention: {
      type: 'string'
    },

    tagline: {
      type: 'string'
    },


    owners: {
      collection: 'user',
      via: 'shops'
    }

    items: {
      collection: 'item',
      via: 'shop'
    }



  }
};
