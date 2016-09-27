'use strict';

var Page = require('watch_framework').Page,
  storage = require ("../../storage");

var complimentsPage = Page.extend({

  id: 'compliments',

  template: require('../../templates/pages/compliments.hbs'),

  buttonEvents: {
    face: 'goToHome'
  },

  goToHome: function() {
    window.App.navigate('');
  },

  render: function() {
    var compliment = storage.complimentsData.first().get('message')
      this.$el.html(this.template({compliment:compliment}));
      return this;
    }

});

module.exports = complimentsPage;
