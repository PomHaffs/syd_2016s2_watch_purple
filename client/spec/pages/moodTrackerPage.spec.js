'use strict';

var MoodTrackerPage = require('../../src/js/pages/moodTrackerPage'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

describe('The Mood Tracker Page', function() {

  beforeEach(function() {
    page = new MoodTrackerPage();
  });

  describe ('rendering', function() {
    it('should display "Mood Tracker" to the user', function() {
      page.render();
      expect(page.$el).toContainText('Mood Tracker');
    });

    it('should display the days of the week', function() {
      page.render();
      expect(page.$el).toContainText('Mon : ', 'Tue :', 'Wed :', 'Thu :', 'Fri :', 'Sat :', 'Sun :');
    });
  });

  describe('button event handlers', function() {
    describe ('face', function() {
      it('should take the user back to the home page', function() {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('face');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });
  });

});
