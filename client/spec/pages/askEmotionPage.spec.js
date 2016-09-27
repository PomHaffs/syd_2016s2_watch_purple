'use strict';

var AskEmotionPage = require('../../src/js/pages/askEmotionPage'),
    page;

describe('The ask emotion page', function() {

    beforeEach(function() {
        page = new AskEmotionPage();
      });

    describe('rendering', function() {
        it('should produce the correct HTML', function() {
            page.render();
            expect(page.$el).toContainText('How are you feeling today');
          });

        it('should pass a variable to the template', function() {

          page.render();
          expect(page.$el).toContainHtml('<h2>How are you feeling today, Susie?</h2>');
        });
      });
  });
