var net = require('net'),
    fs  = require('fs');

var TS = function() {
  var self = this;

  self.buffer = '';
  self.buflen = 0;

  self.sockets = {};
};

TS.prototype.pump = function(message, wpool) {
    return null;
};

module.exports = TS;
