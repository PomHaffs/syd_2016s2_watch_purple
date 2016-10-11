'use strict';

var RunBottomStartPage = require('../../src/js/pages/runBottomStartPage'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

describe('The Run Bottom Start Page', function() {

  beforeEach(function() {
    page = new RunBottomStartPage();
  });

  describe ('rendering', function() {
    it('should display distance remaining', function() {
      page.render();
      expect(page.$el).toContainText('remaining');
    });

    it('should display starting distance', function() {
      page.render();
      expect(page.$el).toContainText('200 m');
    });
  });
});
