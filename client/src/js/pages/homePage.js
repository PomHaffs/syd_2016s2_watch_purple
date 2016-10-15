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

  formatDate: function(date,month,year) {
    var result = date + "/" + month + "/" + year;
    return result;
  },

  render: function() {
    var now = new Date();
    var nowString = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });

    this.$el.html(this.template({
      currentTime: nowString
    }));
    return this;
  }

});

module.exports = homePage;
