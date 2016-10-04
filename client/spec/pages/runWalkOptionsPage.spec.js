'use strict';

var RunWalkOptionsPage = require('../../src/js/pages/runWalkOptionsPage'),
    page;

describe('The RUN/WALK Options Page', function() {

    beforeEach(function() {
        page = new RunWalkOptionsPage();
      });

    describe('rendering', function() {
        it('should produce the correct HTML', function() {
            page.render();
            expect(page.$el).toContainText('RUN/WALK', '500m', '1km', '200m', '1.2km');
          });
      });
  });
