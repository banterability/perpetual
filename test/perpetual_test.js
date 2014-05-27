assert = require('assertive');
perpetual = require('../perpetual');

describe("Perpetual", function(){
  it('returns the correct name for Monday', function(){
    var d = new Date(2014, 4, 19);
    assert.equal('Monday', d.getDayName());
  });
  describe('days of the week', function(){
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
  describe('months of the year', function(){
    it('returns the correct name for January', function(){
      var d = new Date(2014, 0, 1);
      assert.equal('January', d.getMonthName());
    });
    it('returns the correct name for February', function(){
      var d = new Date(2014, 1, 1);
      assert.equal('February', d.getMonthName());
    });
    it('returns the correct name for March', function(){
      var d = new Date(2014, 2, 1);
      assert.equal('March', d.getMonthName());
    });
    it('returns the correct name for April', function(){
      var d = new Date(2014, 3, 1);
      assert.equal('April', d.getMonthName());
    });
    it('returns the correct name for May', function(){
      var d = new Date(2014, 4, 1);
      assert.equal('May', d.getMonthName());
    });
    it('returns the correct name for June', function(){
      var d = new Date(2014, 5, 1);
      assert.equal('June', d.getMonthName());
    });
    it('returns the correct name for July', function(){
      var d = new Date(2014, 6, 1);
      assert.equal('July', d.getMonthName());
    });
    it('returns the correct name for August', function(){
      var d = new Date(2014, 7, 1);
      assert.equal('August', d.getMonthName());
    });
    it('returns the correct name for September', function(){
      var d = new Date(2014, 8, 1);
      assert.equal('September', d.getMonthName());
    });
    it('returns the correct name for October', function(){
      var d = new Date(2014, 9, 1);
      assert.equal('October', d.getMonthName());
    });
    it('returns the correct name for November', function(){
      var d = new Date(2014, 10, 1);
      assert.equal('November', d.getMonthName());
    });
    it('returns the correct name for December', function(){
      var d = new Date(2014, 11, 1);
      assert.equal('December', d.getMonthName());
    });
  });
});
