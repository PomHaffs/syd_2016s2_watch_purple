'use strict';

var RunTopPage = require('../../src/js/pages/runTopPage'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

describe('The Run Top Page', function() {

  beforeEach(function() {
    page = new RunTopPage();
  });

  describe ('rendering', function() {
    it('should display 500m distance to user', function() {
      page.render();
      expect(page.$el).toContainText('500m');
    });
  });
});
