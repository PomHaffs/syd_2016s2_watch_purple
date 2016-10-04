'use strict';

var RunWalkOptionsPage = require('../../src/js/pages/runWalkOptionsPage'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

describe('The RUN/WALK Options Page', function() {

  beforeEach(function() {
    page = new RunWalkOptionsPage();
  });

  describe('rendering', function() {
    it('should produce the correct HTML', function() {
      page.render();
      expect(page.$el).toContainText('RUN/WALK', '500m', '1km', '200m', '1.2km');
    });
  });

  describe('button event handlers', function() {
    describe('face', function() {
      it('should take the user back to the home page', function() {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('face');
        expect(window.App.navigate).toHaveBeenCalledWith('home');
      });
    });

    describe('top', function() {
      it('should take the user to the run top page', function() {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('top');
        expect(window.App.navigate).toHaveBeenCalledWith('runTop');
      });
    });
  });
    describe('button event handlers', function() {
	
	describe('face', function() {
	  it('should take the user back to the home page', function() {
	    spyOn(window.App, 'navigate');
	    page.configureButtons();
	    eventHub.trigger('face');
	    expect(window.App.navigate).toHaveBeenCalledWith('home');
	  });
	});
    });
});










