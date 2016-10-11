'use strict';

var Page = require('watch_framework').Page;
var runWalkOptionsPage = Page.extend({

  id: 'runWalkOptions',

  buttonEvents: {
    face: 'goToHome',
    top: 'goToRunTop',
    bottom: 'goToRunBottom',
    left:'goToRunLeft',
    right:'goToRunRight'
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

  goToRunLeft: function() {
    window.App.navigate('runLeft');
  },

  goToRunRight: function() {
    window.App.navigate('runRight');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = runWalkOptionsPage;
