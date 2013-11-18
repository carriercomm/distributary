var net = require('net'),
    fs  = require('fs');

var Master = function(path) {
  var self = this;
  self.path = path;
};

Master.prototype.run = function() {
  var self = this;
  var socket = net.createServer(function(c) {
    console.log("Connection. But I'm just gonna close it.");
    c.end();
  });

  socket.listen(self.path, function() {
    console.log("Master socket listening.");
  });
};

module.exports = Master;
