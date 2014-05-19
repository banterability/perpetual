assert = require('assertive');
perpetual = require('../perpetual');

describe("Perpetual", function(){
  it('returns the correct name for Monday', function(){
    var d = new Date(2014, 4, 19);
    assert.equal('Monday', d.getDayName());
  });
  it('returns the correct name for Tuesday', function(){
    var d = new Date(2014, 4, 20);
    assert.equal('Tuesday', d.getDayName());
  });
  it('returns the correct name for Wednesday', function(){
    var d = new Date(2014, 4, 21);
    assert.equal('Wednesday', d.getDayName());
  });
  it('returns the correct name for Thursday', function(){
    var d = new Date(2014, 4, 22);
    assert.equal('Thursday', d.getDayName());
  });
  it('returns the correct name for Friday', function(){
    var d = new Date(2014, 4, 23);
    assert.equal('Friday', d.getDayName());
  });
  it('returns the correct name for Saturday', function(){
    var d = new Date(2014, 4, 24);
    assert.equal('Saturday', d.getDayName());
  });
  it('returns the correct name for Sunday', function(){
    var d = new Date(2014, 4, 25);
    assert.equal('Sunday', d.getDayName());
  });
});
