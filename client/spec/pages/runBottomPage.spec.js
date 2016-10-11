'use strict';

var RunBottomPage = require('../../src/js/pages/runBottomPage'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

describe('The Run Bottom Page', function() {

  beforeEach(function() {
    page = new RunBottomPage();
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
    it('should display 200m distance to user', function() {
      page.render();
      expect(page.$el).toContainText('START', '200m');
    });
  });
});
