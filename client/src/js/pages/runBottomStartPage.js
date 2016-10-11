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

  timer: function() {
    $(document).ready(function() {

      var start = 200;
      var timer = window.setInterval(function() {
        start -= 1;
        var msg = start.toFixed(0) + ' m';
        if (start === 0) {
          msg = 'Great work!';
          $('#runTimer').text(msg);
          clearInterval(timer);
        }

        $('#runTimer').text(msg);

      }, 350);
    });
  }
});

module.exports = runBottomStartPage;
