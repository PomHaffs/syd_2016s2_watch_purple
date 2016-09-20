'use strict';

var Page = require('watch_framework').Page;

var complimentsPage = Page.extend({

  id: 'compliments',

  template: require('../../templates/pages/compliments.hbs'),

  buttonEvents: {
    face: 'goToHome'
  },

  goToHome: function() {
    window.App.navigate('');
  },

  render: function () {
      this.$el.html(this.template());
      return this;
  }

});

module.exports = complimentsPage;
