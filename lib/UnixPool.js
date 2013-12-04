var net = require('net'),
    fs  = require('fs');

function UnixPool() {
  var self = this;

  self._inc = 0;

  self.sockets = {};
  self.streams = {};
};

UnixPool.prototype.addSocket = function(socket) {
  var self = this;

  var unixSocket = net.createServer(function(c) {
    console.log("Connection. But I'm just gonna close it.");
    c.end();
  });

  self.path = self._inc.toString(36);

  unixSocket.listen(self.path, function() {
    console.log("Master socket listening.");
  });
};

module.exports = UnixPool;
