'use strict';

var YogaPage = require('../../src/js/pages/yogaPage'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

describe('The Yoga Page', function() {

  beforeEach(function() {
    page = new YogaPage();
  });

  // describe('rendering', function() {
  //   it('should produce the correct HTML', function() {
  //     page.render();
  //     expect(page.$el).toContainText('');
  //   });
  // });

  // describe('button event handlers', function() {
  //   describe('face', function() {
  //     it('should take the user back to the home page', function() {
  //       spyOn(window.App, 'navigate');
  //       page.configureButtons();
  //       eventHub.trigger('face');
  //       expect(window.App.navigate).toHaveBeenCalledWith('home');
  //     });
  //   });

  //   describe('bottom', function() {
  //     it('should complete the exercise and take user back to home page (placeholder)', function() {
  //       spyOn(window.App, 'navigate');
  //       page.configureButtons();
  //       eventHub.trigger('bottom');
  //       expect(window.App.navigate).toHaveBeenCalledWith('home');
  //     });
  //   });
  // });


});
