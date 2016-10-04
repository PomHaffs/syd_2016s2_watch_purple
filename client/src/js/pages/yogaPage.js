'use strict';

var Page = require('watch_framework').Page;
var yogaPage = Page.extend({

  id: 'yoga',

  buttonEvents: {
    face: 'goToHome',
    bottom: 'goToHome'
  },

  template: require('../../templates/pages/yoga.hbs'),

  goToHome: function() {
    window.App.navigate('home');
  },
  
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = yogaPage;
