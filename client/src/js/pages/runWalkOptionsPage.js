'use strict';

var Page = require('watch_framework').Page;
var runWalkOptionsPage = Page.extend({

  id: 'runWalkOptions',

  template: require('../../templates/pages/runWalkOptions.hbs'),

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = runWalkOptionsPage;
