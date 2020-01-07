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






}); // describe close
