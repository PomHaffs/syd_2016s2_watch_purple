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
    it('should display "Go for a run!" to the user', function() {
      page.render();
      expect(page.$el).toContainText('Go for a run!');
    });

    it('should display "Meditate" to the user', function() {
      page.render();
      expect(page.$el).toContainText('Meditate');
    });
  });

  // describe('rendering', function() {

  //   it('should produce the correct HTML', function() {
  //     page.render();
  //     expect(page.$el).toContainHtml('<h1>Contacts</h1>');
  //   });


  //   it('returns the view object', function() {
  //     expect(page.render()).toEqual(page);
  //   });

  // });

});
