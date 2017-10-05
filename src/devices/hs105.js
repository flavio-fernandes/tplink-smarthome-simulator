'use strict';

const merge = require('lodash.merge');

const Hs100 = require('./hs100');

const defaultData = require('./data/hs105');

class Hs105 extends Hs100 {
  constructor (data) {
    super(data);
    merge(this.data, defaultData);
  }
}

module.exports = Hs105;