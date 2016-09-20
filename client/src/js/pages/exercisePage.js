'use strict';

var Page = require('watch_framework').Page;
var exercisePage = Page.extend({
  id: 'exercise',

  render: function() {
    this.$el.html("<div>Go for a run!!</div><div>Meditate</div>");
    return this;
	}
});

module.exports = exercisePage;