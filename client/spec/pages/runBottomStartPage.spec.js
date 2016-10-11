'use strict';

var runBottomStartPage = require('../../src/js/pages/runBottomStartPage'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

describe('The Run Bottom Start Page', function() {

  beforeEach(function() {
    page = new runBottomStartPage();
  });

  describe ('rendering', function() {
    it('should display distance remaining', function() {
      page.render();
      expect(page.$el).toContainText('remaining');
    });
  });

});
