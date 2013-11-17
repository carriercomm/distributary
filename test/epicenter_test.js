
var epicenter = require('../lib/epicenter.js'),
    chai      = require('chai'),
    should    = chai.should();

describe('epicenter', function () {
  before(function(done) {
    done();
  });

  it('should instancy module', function(done) {
    console.log(epicenter);
    epicenter.should.be.a('function');
    done();
  });
  
});
