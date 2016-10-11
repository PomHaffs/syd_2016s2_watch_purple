'use strict';

var Page = require('watch_framework').Page;
var Mood = require('../models/mood');

var AskEmotionPage = Page.extend({

  id: 'askEmotion',

  template: require('../../templates/pages/askEmotion.hbs'),

  buttonEvents: {
    top: 'goToHome',
    face: 'goToHome',
    bottom: 'goToExercise',
  },

  goToHome: function() {
    window.App.navigate('home');
    var currentMood = new Mood({
      mood: "Good",
      timeDate: new Date()
    });
    console.log(currentMood);
   // console.log(currentMood.timeDate);
  },

  goToExercise: function() {
    window.App.navigate('exercise');
    var currentMood = new Mood( {
      mood: "Bad",
      timeDate: new Date()
    });
    console.log(currentMood);
  //  console.log(currentMood.timeDate);
  },

  render: function() {
    this.$el.html(this.template({name: 'Susie'}));
    return this;
  }

});

module.exports = AskEmotionPage;
