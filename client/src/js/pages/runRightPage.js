'use strict';

var Page = require('watch_framework').Page;
var runRightPage = Page.extend({
  id: 'runRight',

  template: require('../../templates/pages/runRight.hbs'),

  buttonEvents: {
      face: "goToHome"
  },

  goToHome: function() {
    window.App.navigate('home');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = runRightPage;
