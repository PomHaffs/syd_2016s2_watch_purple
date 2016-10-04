'use strict';

var Page = require('watch_framework').Page;

var AskEmotionPage = Page.extend({

  id: 'askEmotion',

  template: require('../../templates/pages/askEmotion.hbs'),

  buttonEvents: {
    top: 'goToHome',
    face: 'goToHome'
  },

  goToHome: function() {
    window.App.navigate('');
  },

  goToCompliments: function() {
    window.App.navigate('compliments');
  },

  render: function() {
    this.$el.html(this.template({name: 'Susie'}));
    return this;
  }

});

module.exports = AskEmotionPage;
