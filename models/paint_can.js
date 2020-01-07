const Paint = function(litres){
  this.litres = litres;
};

Paint.prototype.checkEmpty = function(){
  if (this.litres) {
    return false;
  }
  else {
    return true;
  }
};

Paint.prototype.empty = function(){
  this.litres = 0;
};

module.exports = Paint;
