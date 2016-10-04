'use strict';

var RunLeftPage = require('../../src/js/pages/runLeftPage'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

describe('The Run Left Page', function() {

  beforeEach(function() {
    page = new RunLeftPage();
  });

  describe ('rendering', function() {
    it('should display 1km distance to user', function() {
      page.render();
      expect(page.$el).toContainText('1km');
    });
  });
});
