'use strict';

var Page = require('watch_framework').Page;
var Mood = require('../models/mood');

var MoodTrackerPage = Page.extend({

  id: 'moodTracker',

  template: require('../../templates/pages/moodTracker.hbs'),

  buttonEvents: {

  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = MoodTrackerPage;
