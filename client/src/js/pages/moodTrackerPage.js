'use strict';

var Page = require('watch_framework').Page;
var Mood = require('../models/mood');

var MoodTrackerPage = Page.extend({

  id: 'moodTracker',

  template: require('../../templates/pages/moodTracker.hbs'),

  buttonEvents: {
    face: 'goToHome'
  },

  goToHome: function() {
    window.App.navigate('');
  },

  interpretMood: function(mood) {
    if (mood > 0) {
      return 'Feeling great ^_^';
    } else if (mood < 0) {
      return 'Not so good :(';
    } else {
      return 'Meh ¯\\_(ツ)_/¯';
    }
  },

  averageMood: function() {
    var weekMoods = new Array(7);
    for (var i = weekMoods.length - 1; i >= 0; i = i - 1) {
      weekMoods[i] = 0;
    }

    var moodsToPrint = new Array(7);
    for (i = moodsToPrint.length - 1; i >= 0; i = i - 1) {
      moodsToPrint[i] = 'No mood recorded';
    }

    var moodArray = window.currentMood;
    var length = moodArray.length;

    if (length === 0) {
      return moodsToPrint;
    }

    var dayStart = moodArray[0].attributes.timeDate.getTime();
    for (i = 0; i < length; i = i + 1) {
      var timeSinceStart = (moodArray[i].attributes.timeDate.getTime() - dayStart) / 1000;
      var day = Math.floor(timeSinceStart / 10);

      if (moodArray[i].attributes.mood === 'Feeling great ^_^') {
        weekMoods[day] = weekMoods[day] + 1;
      } else {
        weekMoods[day] = weekMoods[day] - 1;
      }

      moodsToPrint[day] = this.interpretMood(weekMoods[day]);
    }

    return moodsToPrint;
  },

  render: function() {
    var day;
    var moods = new Array(7);
    moods = this.averageMood();

    this.$el.html(this.template({monMood: moods[0], tueMood: moods[1], wedMood: moods[2], thuMood: moods[3],
                                        friMood: moods[4], satMood: moods[5], sunMood: moods[6]}));
    return this;
  }

});

module.exports = MoodTrackerPage;
