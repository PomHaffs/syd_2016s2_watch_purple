'use strict';

var ComplimentsPage = require('../../src/js/pages/complimentsPage'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

window.App = App;

describe('The Compliments page', function() {

  beforeEach(function() {
    page = new ComplimentsPage();
  });

  describe('button event handlers', function() {

    describe('face', function() {

      it('should take the user to the home page', function() {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('face');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });

  });

  describe('rendering', function() {

    it('returns the view object', function() {
      expect(page.render()).toEqual(page);
    });

  });

  describe('randomCompliments', function() {
    it('should return a random compliment', function() {
      var compliment = page.randomCompliments();
      expect(compliment).not.toBeNull();
    });

  });

});
