'use strict';

var Page = require('watch_framework').Page;

var homePage = Page.extend({

  id: 'home',

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    top: 'goToAskEmotion',
    right: 'goToCompliments',
    bottom: 'scrollDown',
    left: 'goToExercise'
  },

  goToCompliments: function() {
    window.App.navigate('compliments');
  },

  goToAskEmotion: function() {
    window.App.navigate('askEmotion');
  },

  scrollUp: function() {
    $('#watch-face').animate({scrollTop: '-=70px'});
  },

  scrollDown: function() {
    $('#watch-face').animate({scrollTop: '+=70px'});
  },
  
  goToExercise: function() {
    window.App.navigate('exercise');  
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = homePage;
