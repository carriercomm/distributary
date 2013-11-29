/*
 * distributary
 * https://github.com/jasonmay/distributary
 *
 * Copyright (c) 2013 Jason May
 * Licensed under the MIT license.
 */

var Master = require('./master');

var distributary = module.exports = {
  run: function() {
    var master = new Master('master.sock');
    master.run();
  }
};
