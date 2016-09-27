'use strict';

var ExercisePage = require('../../src/js/pages/exercisePage'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

describe('The Exercise Page', function() {

  beforeEach(function() {
    page = new ExercisePage();
  });

  describe ('rendering', function() {
    it('should display "Run" to the user', function() {
      page.render();
      expect(page.$el).toContainText('Run');
    });

    it('should display "Yoga" to the user', function() {
      page.render();
      expect(page.$el).toContainText('Yoga');
    });
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



});
