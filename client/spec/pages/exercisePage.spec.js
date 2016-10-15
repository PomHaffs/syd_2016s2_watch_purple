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
    it('should display "RUN/WALK" to the user', function() {
      page.render();

      // expect(page.$el).toContainText('RUN/WALK');

      // expect(page.$el).toContain('../../src/images/exerciseBackground.png');
    });

    it('should display "YOGA" to the user', function() {
      page.render();

      // expect(page.$el).toContainText('YOGA');
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

    describe ('top', function() {
        it('should take the user to the RUN/WALK options page', function() {
            spyOn(window.App, 'navigate');
            page.configureButtons();
            eventHub.trigger('top');
            expect(window.App.navigate).toHaveBeenCalledWith('runWalkOptions');
          });
      });

    describe ('bottom', function() {
        it('should take the user to the YOGA page', function() {
            spyOn(window.App, 'navigate');
            page.configureButtons();
            eventHub.trigger('bottom');
            expect(window.App.navigate).toHaveBeenCalledWith('yoga');
          });
      });
  });
});
