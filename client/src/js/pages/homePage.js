'use strict';

var Page = require('watch_framework').Page;

var homePage = Page.extend({

  id: 'home',

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    top: 'goToAskEmotion',
    right: 'goToCompliments',
    bottom: 'goToMoodTracker',
    left: 'goToExercise'
  },

  goToCompliments: function() {
    window.App.navigate('compliments');
  },

  goToAskEmotion: function() {
    window.App.navigate('askEmotion');
  },

  goToExercise: function() {
    window.App.navigate('exercise');
  },

  goToMoodTracker: function() {
    window.App.navigate('moodTracker');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = homePage;
