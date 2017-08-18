'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var VideoSchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  thumbnailUrl: {
    type: String
  },
  videoUrl: {
    type: String
  },
});

module.exports = mongoose.model('Videos', VideoSchema);