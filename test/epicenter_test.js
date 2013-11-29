
var distributary = require('../lib/distributary.js'),
    chai      = require('chai'),
    should    = chai.should();

describe('distributary', function () {
  before(function(done) {
    done();
  });

  it('should instancy module', function(done) {
    distributary.should.be.a('object');
    distributary.should.have.run;
    done();
  });
  
});
