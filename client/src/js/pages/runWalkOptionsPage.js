'use strict';

var Page = require('watch_framework').Page;
var runWalkOptionsPage = Page.extend({

  id: 'runWalkOptions',

  buttonEvents: {
    face: 'goToHome'
  },

  template: require('../../templates/pages/runWalkOptions.hbs'),

  goToHome: function() {
    window.App.navigate('home');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = runWalkOptionsPage;
