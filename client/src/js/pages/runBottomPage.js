'use strict';

var Page = require('watch_framework').Page;
var runBottomPage = Page.extend({
  id: 'runBottom',

  buttonEvents: {
    face: 'goToHome',
    bottom: 'goToRunBottomStart'
  },

  template: require('../../templates/pages/runBottom.hbs'),

  goToHome: function() {
    window.App.navigate('home');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  goToRunBottomStart: function() {
    window.App.navigate('runBottomStart');
  }

});

module.exports = runBottomPage;
