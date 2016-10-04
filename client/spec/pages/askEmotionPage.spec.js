'use strict';

var AskEmotionPage = require('../../src/js/pages/askEmotionPage'),
    App = require('../../src/js/app'),
    eventHub = require('watch_framework').EventHub,
    page;

describe('The ask emotion page', function() {

    beforeEach(function() {
        page = new AskEmotionPage();
      });

    describe('button event handlers', function() {
      describe ('top', function() {
        it('should take the user to the home page', function() {
          spyOn(window.App, 'navigate');
          page.configureButtons();
          eventHub.trigger('top');
          expect(window.App.navigate).toHaveBeenCalledWith('');
        });
      });
      describe ('bottom', function() {
        it('should take the user to the exercise page', function() {
          spyOn(window.App, 'navigate');
          page.configureButtons();
          eventHub.trigger('bottom');
          expect(window.App.navigate).toHaveBeenCalledWith('exercise');
        });
      });
      describe ('face', function() {
        it('should take the user to the home page', function() {
          spyOn(window.App, 'navigate');
          page.configureButtons();
          eventHub.trigger('face');
          expect(window.App.navigate).toHaveBeenCalledWith('');
        });
      });
    });

    describe('rendering', function() {
      it('should ask the user how they feel?', function() {
        page.render();
        expect(page.$el).toContainHtml('<h2>How are you feeling today, Susie?</h2>');
      });
    });

  });
