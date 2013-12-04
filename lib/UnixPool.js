var net = require('net'),
    fs  = require('fs');

function UnixPool(streamID) {
  var self = this;

  self.streamID = streamID;

  self.sockets = {};
  self.streams = {};
};

UnixPool.prototype.addSocket = function(socket) {
  var self = this;

  var unixSocket = net.createServer(function(c) {
    console.log("Connection. But I'm just gonna close it.");
    c.end();
  });

  unixSocket.listen(self.path, function() {
    console.log("Master socket listening.");
  });
};

module.exports = UnixPool;
