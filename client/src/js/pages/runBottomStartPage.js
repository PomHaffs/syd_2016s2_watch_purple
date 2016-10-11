'use strict';

var Page = require('watch_framework').Page;
var runBottomStartPage = Page.extend({
  id: 'runBottomStart',

  template: require('../../templates/pages/runBottomStart.hbs'),

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = runBottomStartPage;
