'use strict';

var Page = require('watch_framework').Page,
  storage = require('../../storage');

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
    return storage.posesData.sample().attributes;
  },

  render: function() {
    var pose = this.randomPoses();
    var image = pose.imgPath;
    this.$el.html(this.template({
      name: pose.name,
      image: pose.imgPath,
      description: pose.description
    }));
    return this;
  }
});

module.exports = yogaPage;
