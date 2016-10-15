'use strict';

var Page = require('watch_framework').Page,
  storage = require ('../../storage');

var yogaPage = Page.extend({

  id: 'yoga',

  buttonEvents: {
    face: 'goToHome',
    bottom: 'goToCompliments'

  },

  template: require('../../templates/pages/yoga.hbs'),

  goToHome: function() {
    window.App.navigate('home');
  },

  goToCompliments: function() {
    window.App.navigate('compliments');
  },

  randomPoses: function() {
    return storage.posesData.sample().get('name');
  },

  render: function() {
    var name = this.randomPoses();

    this.$el.html(this.template({name:name}));
    return this;
  }
});

module.exports = yogaPage;
