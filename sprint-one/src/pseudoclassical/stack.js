var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.endVal = 0; 
};

Stack.prototype.push = function(val) {
  this[this.endVal] = val;
  this.endVal++;
};
Stack.prototype.pop = function() {
  debugger;
  this.endVal--;
  var temp = this[this.endVal];
  delete this[this.endVal];
  
  return temp;
};
Stack.prototype.size = function() {
  if( this.endVal < 0 ){
    return 0;
  } else {
    return this.endVal;
  }
};
