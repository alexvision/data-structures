var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var stack = Object.create(stackMethods);
  stack.endVal = 0;
  return stack;
};

var stackMethods = {
  push: function(val) {
    this[this.endVal] = val;
    this.endVal++;
  },
  pop: function() {
    this.endVal--;
    var popped = this[this.endVal];
    delete this[this.endVal];
    return popped;
  },
  size: function() {
    if (this.endVal >= 0) {
      return this.endVal;
    } else {
      return 0;
    }
  }
};