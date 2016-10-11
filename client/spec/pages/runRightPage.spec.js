'use strict';

var RunRightPage = require('../../src/js/pages/runRightPage'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

describe('The Run Right Page', function() {

  beforeEach(function() {
    page = new RunRightPage();
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
    it('should display 1.2km distance to user', function() {
      page.render();
      expect(page.$el).toContainText('1.2km');
    });
  });
});
