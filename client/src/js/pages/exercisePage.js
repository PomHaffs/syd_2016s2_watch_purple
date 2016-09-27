'use strict';

var Page = require('watch_framework').Page;
var exercisePage = Page.extend({
  id: 'exercise',

  render: function() {
    this.$el.html('<div>Go for a run!!</div><div>Yoga</div>');
    return this;
  }
});

module.exports = exercisePage;
