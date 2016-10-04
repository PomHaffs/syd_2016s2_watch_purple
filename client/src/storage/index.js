'use strict';

var eventsData = require("json!./events.json");
var complimentsData = require("json!./compliments.json");
var posesData = require("json!./poses.json");

function Storage() {
  this.eventsData = new Backbone.Collection();
  this.eventsData.add(eventsData.events);
  this.complimentsData = new Backbone.Collection();
  this.complimentsData.add(complimentsData.compliments);
  this.posesData = new Backbone.Collection();
  this.posesData.add(posesData.poses);
}

module.exports = new Storage();
