'use strict';

var RunBottomPage = require('../../src/js/pages/runBottomPage'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

describe('The Run Bottom Page', function() {

  beforeEach(function() {
    page = new RunBottomPage();
  });

  describe ('rendering', function() {
    it('should display 200m distance to user', function() {
      page.render();
      expect(page.$el).toContainText('START', '200m');
    });
  });
});
