var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newStack = {};
  newStack.lastVal = 0;
  _.extend(newStack, stackMethods);
  return newStack;
};

 var stackMethods = {
  push: function (val) {
    this.lastVal++;
    this[this.lastVal] = val;
  },
  pop: function () {
    var tempVar = this[this.lastVal];
    delete this[this.lastVal]
    this.lastVal--;
    return tempVar;
  },
  size: function () {
    if (this.lastVal > 0) {
      return this.lastVal;
    } else {
      return 0;
    }
  }
};

