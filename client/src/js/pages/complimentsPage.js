'use strict';

var Page = require('watch_framework').Page;

var complimentsPage = Page.extend({

  id: 'compliments',

  buttonEvents: {
    face: 'goToHome'
  },

  goToHome: function() {
    window.App.navigate('');
  }

});

module.exports = complimentsPage;
