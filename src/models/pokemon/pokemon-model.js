'use strict';

const Model = require('../mongo-model.js');
const schema = require('./pokemon-schema.js');

class Pokemon extends Model {}

module.exports = new Pokemon(schema);

