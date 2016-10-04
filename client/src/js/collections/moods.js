'use strict';

var Mood = require('../models/mood');

var Moods = Backbone.Collection.extend({
  model: Mood
});

module.exports = Moods;
