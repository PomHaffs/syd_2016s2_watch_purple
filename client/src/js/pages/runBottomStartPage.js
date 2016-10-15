'use strict';

var Page = require('watch_framework').Page;

var runBottomStartPage = Page.extend({
  id: 'runBottomStart',

  template: require('../../templates/pages/runBottomStart.hbs'),

  render: function() {
    this.timer();
    this.$el.html(this.template());
    return this;
  },

  myFunction: function(arg) {
    if (arg > 2) {
      return true;
    } else {
      return false;
    }
  },

  timer: function() {
    $(document).ready(function() {
      var start = 200;
      var timer = window.setInterval(function() {
        start -= 1;
        var msg = start.toFixed(0) + ' m';
        $('#runTimer').text(msg);
      }, 50);

      window.setTimeout(function() {
        window.App.navigate('compliments');
        clearInterval(timer);
      }, 10000);
    });
  }
});

module.exports = runBottomStartPage;
