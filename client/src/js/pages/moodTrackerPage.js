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
    console.log(window.currentMood);
    console.log(window.currentMood[0].attributes.timeDate.getTime());
  },

  interpretMood: function(mood) {
    if(mood>0) {
      return "Feeling great ^_^";
    } else if (mood<0) {
      return "Not so good :(";
    } else {
      return "Meh ¯\\_(ツ)_/¯";  
    }
  },

  averageMood: function() {
    var weekMoods = new Array(7);
    for (var i = weekMoods.length-1; i >= 0; --i) weekMoods[i] = 0;
    var moodsToPrint = new Array(7);
    for (var i = moodsToPrint.length-1; i >= 0; --i) moodsToPrint[i] = "No mood recorded";
    var moodArray = window.currentMood;
    var length = moodArray.length;

    if (length == 0) return moodsToPrint;

    var dayStart = moodArray[0].attributes.timeDate.getTime();
    for (var i=0;i<length;i++) {
      var timeSinceStart = (moodArray[i].attributes.timeDate.getTime() - dayStart) / 1000;
      var day = Math.floor(timeSinceStart / 10);
      console.log("day ", day);

      if(moodArray[i].attributes.mood == "Feeling great ^_^") {
        weekMoods[day]++;
        console.log("mood up");
      } else {
        weekMoods[day]--;
        console.log("mood down");
      }
      moodsToPrint[day] = this.interpretMood(weekMoods[day]);
      console.log("weekMoods at day", day, "is", weekMoods[day]);
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
