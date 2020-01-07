const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint_can.js');




describe('Decorator', function(){

  let decorator;
  let paint;

  beforeEach(function(){
    decorator = new Decorator();
    paint = new Paint(10);
  });

  it('should start with no paint', function(){
    const actual = decorator.paintStock.length;
    assert.strictEqual(actual, 0);
  });
  it('should be able to add a can of paint', function(){
    decorator.addToStock(paint)
    const actual = decorator.paintStock.length;
    assert.deepStrictEqual(actual, 1);
  });




}) // decorator close
