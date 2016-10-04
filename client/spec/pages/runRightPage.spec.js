'use strict';

var RunRightPage = require('../../src/js/pages/runRightPage'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

describe('The Run Right Page', function() {

  beforeEach(function() {
    page = new RunRightPage();
  });

  describe ('rendering', function() {
    it('should display 1.2km distance to user', function() {
      page.render();
      expect(page.$el).toContainText('1.2km');
    });
  });
});
