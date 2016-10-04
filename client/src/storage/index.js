'use strict';

var eventsData = require("json!./events.json");
var complimentsData = require("json!./compliments.json");

function Storage() {
  this.eventsData = new Backbone.Collection();
  this.eventsData.add(eventsData.events);
  this.complimentsData = new Backbone.Collection();
  this.complimentsData.add(complimentsData.compliments);
}

module.exports = new Storage();
