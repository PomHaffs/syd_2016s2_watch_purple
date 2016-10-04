'use strict';

var Page = require('watch_framework').Page;

var AskEmotionPage = Page.extend({

  id: 'askEmotion',

  template: require('../../templates/pages/askEmotion.hbs'),

  buttonEvents: {
    top: 'goToHome',
    face: 'goToHome',
    bottom: 'goToExercise',
  },

  goToHome: function() {
    window.App.navigate('');
  },

  goToExercise: function() {
    window.App.navigate('exercise');
  },

  render: function() {
    this.$el.html(this.template({name: 'Susie'}));
    return this;
  }

});

module.exports = AskEmotionPage;
