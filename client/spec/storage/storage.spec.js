'use strict';

var storage = require('../../src/storage');

describe('storage', function() {
  describe('compliments', function() {
    it('should load the compliments data', function() {
       expect(storage.complimentsData.length).toEqual(9);
    });
  });

  describe('poses', function() {
    it('should load the yoga poses data', function() {
       expect(storage.posesData.length).toEqual(3);
    });
  });
});
