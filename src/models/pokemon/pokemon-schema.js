'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const pokemon = mongoose.Schema({
  name: { type:String, required:true },
  type: { type:String, required:true },
});

module.exports = mongoose.model('players', pokemon);
