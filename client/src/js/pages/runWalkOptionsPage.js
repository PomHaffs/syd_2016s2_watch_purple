'use strict';

var Page = require('watch_framework').Page;
var runWalkOptionsPage = Page.extend({

  id: 'runWalkOptions',

  buttonEvents: {
    face: 'goToHome',
    top: 'goToRunTop',
    bottom: 'goToRunBottom'
  },

  template: require('../../templates/pages/runWalkOptions.hbs'),

  goToHome: function() {
    window.App.navigate('home');
  },

  goToRunTop: function() {
    window.App.navigate('runTop');
  },

  goToRunBottom: function() {
    window.App.navigate('runBottom');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = runWalkOptionsPage;
