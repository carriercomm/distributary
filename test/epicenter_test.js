
var epicenter = require('../lib/epicenter.js'),
    chai      = require('chai'),
    should    = chai.should();

describe('epicenter', function () {
  before(function(done) {
    done();
  });

  it('should instancy module', function(done) {
    epicenter.should.be.a('object');
    epicenter.should.have.run;
    done();
  });
  
});
