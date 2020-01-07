const Decorator = function(){

  this.paintStock = [];

};

Decorator.prototype.addToStock = function(paint){
  this.paintStock.push(paint);
};

module.exports = Decorator;
