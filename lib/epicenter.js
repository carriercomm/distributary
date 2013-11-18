/*
 * epicenter
 * https://github.com/jasonmay/epicenter
 *
 * Copyright (c) 2013 Jason May
 * Licensed under the MIT license.
 */

var Master = require('./master');

var epicenter = module.exports = {
  run: function() {
    var master = new Master('master.sock');
    master.run();
  }
};
