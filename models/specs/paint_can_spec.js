const assert = require('assert');
const Paint = require('../paint_can.js');

describe('Paint', function(){

  let paint;

  beforeEach(function(){
    paint = new Paint(10)
  });

  it('should have litres', function(){
    const actual = paint.litres;
    assert.strictEqual(actual, 10);
  });
  it('should know if its empty - false', function(){
    const actual = paint.checkEmpty();
    assert.strictEqual(actual, false);
  });
  it('should know if its empty - true', function(){
    paint.empty();
    const actual = paint.checkEmpty();
    assert.strictEqual(actual, true);
  });
  it('should be able to empty itself', function(){
    paint.empty();
    const actual = paint.litres;
    assert.strictEqual(actual, 0);
  });

}); // describe close
