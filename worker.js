var UnixPool = require('./lib/UnixPool');

if (process.argv.length < 3 || process.argv[0] !== 'node') {
    throw "Usage: node worker.js <stream id>";
}

var streamID = process.argv[2];

var upool = new UnixPool(streamID);
