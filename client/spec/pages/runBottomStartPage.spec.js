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

  describe ('myFunction', function() {
    it('returns true if 4', function() {
      var result = page.myFunction(4);
      expect(result).toEqual(true);
    });
  });

  describe ('myFunction', function() {
    it('returns false if 1', function() {
      var result = page.myFunction(1);
      expect(result).toEqual(false);
    });
  });

  describe ('timer', function() {
    it('should call window.setInterval()', function() {
      spyOn(window, 'setInterval');
      page.render();
      expect(window.setInterval).toHaveBeenCalled();
    });
  });

  describe ('face button', function() {
    it('should go to the home page when the face button is pressed', function() {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('face');
      expect(window.App.navigate).toHaveBeenCalledWith('home');
    });
  });
});
