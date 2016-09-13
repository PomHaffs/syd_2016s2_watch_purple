'use strict';

var Contact = Backbone.Model.extend({
  defaults: {
    name: 'Sam',
    message: 'You look great in that red dress'
  }
});

module.exports = Contact;
