'use strict';

var Page = require('watch_framework').Page;
var exercisePage = Page.extend({
  id: 'exercise',

  buttonEvents: {
    face: 'goToHome'
  },

  goToHome: function() {
    window.App.navigate('home');
  },

  render: function() {
    this.$el.html('<div class="exercise-top">RUN/WALK</div><div class="exercise-bottom">YOGA</div>');
    return this;
  }

});

module.exports = exercisePage;
