/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    first_name: {
      type: 'string'
    },

    last_name: {
      type: 'string'
    },

    username: {
      type: 'string'
    },

    dob: {
      type: 'date'
    },

    origin_location: {
      type: 'string'
    },

    current_location: {
      type: 'string'
    },

    admin: {
      type: 'boolean'
    },

    super_admin: {
      type: 'boolean'
    },

    addresses: {
      collection: 'address',
      via: 'owner'
    },

    shops: {
      collection: 'shop',
      via: 'owners',
      dominant: true
    }

  }
};
