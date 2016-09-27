'use strict';

var Page = require('watch_framework').Page;

var AskEmotionPage = Page.extend({

  id: 'askEmotion',

  template: require('../../templates/pages/askEmotion.hbs'),

  render: function() {
    this.$el.html(this.template({name: 'Susie'}));
    return this;
  }

});

module.exports = AskEmotionPage;
