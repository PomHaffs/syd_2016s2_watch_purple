'use strict';

var Page = require('watch_framework').Page;
var exercisePage = Page.extend({
  id: 'exercise',

  buttonEvents: {
    face: 'goToHome',
    top: 'goToRunWalkOptions',
    bottom: 'goToYoga'
  },

  goToHome: function() {
    window.App.navigate('home');
  },

  goToRunWalkOptions: function() {
    window.App.navigate('runWalkOptions');
  },

  goToYoga: function() {
    window.App.navigate('yoga');
  },

  render: function() {
    this.$el.html('<div class="exercise-top">RUN/WALK</div><div class="exercise-bottom">YOGA</div>');
    return this;
  }

});

module.exports = exercisePage;
