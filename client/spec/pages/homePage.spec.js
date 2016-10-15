'use strict';

var HomePage = require('../../src/js/pages/homePage'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

window.App = App;

describe('The Home Page', function() {

  beforeEach(function() {
    page = new HomePage();
  });

  describe('button event handlers', function() {
    describe ('left', function() {
      it('should take the user to the exercise page', function() {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('exercise');
      });
    });

    describe('right', function() {

      it('should take the user to the compliment page', function() {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('compliments');
      });
    });

    describe('top', function() {
      it('should go to the emotion analysis page', function() {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('top');
        expect(window.App.navigate).toHaveBeenCalledWith('askEmotion');
      });
    });

    describe('bottom', function() {
      it('should display the moodTracker page', function() {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('bottom');
        expect(window.App.navigate).toHaveBeenCalledWith('moodTracker');
      });
    });

  });

  describe('rendering', function() {

    it('should not show the logo', function() {
      page.render();
      expect(page.$el.html()).not.toContain('<img src="');
    });

    it('should not show lorem ipsum filler text', function() {
      page.render();
      expect(page.$el.html()).not.toContain('Lorem ipsum');
    });

    it('returns the view object', function() {
      expect(page.render()).toEqual(page);
    });

  });

  describe('clock', function() {
    var now;
    var date;
    var month;
    var year;
    var formatDateString;

    beforeEach(function() {
      now = new Date();
      date = now.getDate();
      month = now.getMonth() + 1;
      year = now.getFullYear();
      formatDateString = page.formatDate(date, month, year);
    });

    it('should display relevent AM or PM based on current hour', function() {
      var now = new Date();
      var hour = now.getHours();
      var amPm = '';
      if (hour < 12) {
        amPm = 'AM';
      }
      else {
        amPm = 'PM';
      }

      page.render();
      expect(page.$el.html().toUpperCase()).toContain(amPm);
    });

    it('should return the correct date format dd/mm/yyyy', function() {
      expect(formatDateString).toMatch(/\d*\/\d*\/(\d){4}/);
    });

    it('should display the correct date format on home page', function() {
      page.render();
      expect(page.$el.html()).toContain(formatDateString);
    });
  });

});
