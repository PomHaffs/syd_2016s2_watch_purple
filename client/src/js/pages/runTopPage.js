'use strict';

var Page = require('watch_framework').Page;
var runTopPage = Page.extend({
  id: 'runTop',

  template: require('../../templates/pages/runTop.hbs'),

  buttonEvents: {
      face: "goToHome"
  },

  goToHome: function() {
    window.App.navigate('home');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = runTopPage;
