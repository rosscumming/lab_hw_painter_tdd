const assert = require('assert');
const Room = require('../room.js');


describe('Room', function(){

  let room;

  beforeEach(function(){
    room = new Room(8);
  });

  it('Should have an area', function(){
    const actual = room.area;
    assert.strictEqual(actual, 8);
  });
  it('Should start not painted', function(){
    const actual = room.painted;
    assert.strictEqual(actual, false);
  });
  it('Should be able to be painted', function(){
    room.updatePainted();
    const actual = room.painted;
    assert.strictEqual(actual, true);
  });

}) // describe close
