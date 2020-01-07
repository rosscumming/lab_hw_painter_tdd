const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint_can.js');
const Room = require('../room.js');



describe('Decorator', function(){

  let decorator;
  let paint;
  let room;

  beforeEach(function(){
    decorator = new Decorator();
    paint = new Paint(10);
    room = new Room(14);
  });

  it('should start with no paint', function(){
    const actual = decorator.paintStock.length;
    assert.strictEqual(actual, 0);
  });
  it('should be able to add a can of paint', function(){
    decorator.addToStock(paint);
    const actual = decorator.paintStock.length;
    assert.deepStrictEqual(actual, 1);
  });
  it('should be able to calculate total litres of paint in stock', function(){
    decorator.addToStock(paint);
    decorator.addToStock(paint);
    const actual = decorator.totalLitres();
    assert.deepStrictEqual(actual, 20)
  });
  it('should be able to calculate if enough paint to paint room', function(){
    decorator.addToStock(paint);
    decorator.addToStock(paint);
    const actual = decorator.hasEnoughPaint(room);
    assert.strictEqual(actual, true);
  });
  it('should be able to paint room if enough stock', function(){
    decorator.addToStock(paint);
    decorator.addToStock(paint);
    decorator.paintRoom(room)
    const actual = room.painted
    assert.strictEqual(actual, true)
  });


}) // decorator close
