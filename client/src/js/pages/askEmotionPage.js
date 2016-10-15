'use strict';

var Page = require('watch_framework').Page;
var Mood = require('../models/mood');

var AskEmotionPage = Page.extend({

  id: 'askEmotion',

  template: require('../../templates/pages/askEmotion.hbs'),

  buttonEvents: {
    top: 'goToHome',
    face: 'goToHome',
    bottom: 'goToExercise'
  },

  goToHome: function() {
    window.App.navigate('home');
    var currentMood = new Mood({
      mood: 'Good',
      timeDate: new Date()
    });

    window.currentMood.push(
      new Mood( {
        mood: "Feeling great ^_^",
        timeDate: new Date()
      })
    );
  },

  goToExercise: function() {
    window.App.navigate('exercise');
    var currentMood = new Mood({
      mood: 'Bad',
      timeDate: new Date()
    });
    window.currentMood.push(
      new Mood( {
        mood: "Not so good :(",
        timeDate: new Date()
      })
    );
    console.log(window.currentMood);
  },

  render: function() {
    this.$el.html(this.template({name: 'Susie'}));
    return this;
  }

});

module.exports = AskEmotionPage;
