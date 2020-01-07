const Decorator = function(){

  this.paintStock = [];

};

Decorator.prototype.addToStock = function(paint){
  this.paintStock.push(paint);
};

Decorator.prototype.totalLitres = function(){
  total = 0;
  for (let  paint of this.paintStock){
    total += paint.litres
  }
  return total;
};

Decorator.prototype.hasEnoughPaint = function(room){
 if (this.totalLitres() > room.area){
   return true;
 } else {
   return false;
 };
};

Decorator.prototype.paintRoom = function (room) {
  if(this.hasEnoughPaint(room)){
    room.updatePainted()
  }
};

module.exports = Decorator;
