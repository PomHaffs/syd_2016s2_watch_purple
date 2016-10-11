'use strict';

var RunTopPage = require('../../src/js/pages/runTopPage'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

describe('The Run Top Page', function() {

  beforeEach(function() {
    page = new RunTopPage();
  });

  describe('button event handlers', function() {
    describe ('face', function() {
      it('should take the user back to the home page', function() {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('face');
        expect(window.App.navigate).toHaveBeenCalledWith('home');
      });
    });
  });

  describe ('rendering', function() {
    it('should display 500m distance to user', function() {
      page.render();
      expect(page.$el).toContainText('500m');
    });
  });
});
