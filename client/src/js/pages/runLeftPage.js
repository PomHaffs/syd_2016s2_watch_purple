'use strict';

var Page = require('watch_framework').Page;
var runLeftPage = Page.extend({
  id: 'runLeft',

  template: require('../../templates/pages/runLeft.hbs'),

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = runLeftPage;
