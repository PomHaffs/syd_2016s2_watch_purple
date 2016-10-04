'use strict';

var Page = require('watch_framework').Page;
var runBottomPage = Page.extend({
  id: 'runBottom',

  template: require('../../templates/pages/runBottom.hbs'),

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = runBottomPage;
