var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var queue = Object.create(queueMethods);
  queue.firstVal = 0;
  queue.lastVal = 0;
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this[this.lastVal] = val;
  this.lastVal++;
};
queueMethods.dequeue = function() {
  var temp = this[this.firstVal];
  delete this[this.firstVal];
  this.firstVal++;
  return temp;
};
queueMethods.size = function() {
  if (this.lastVal - this.firstVal > 0) { 
    return this.lastVal - this.firstVal;
  } else {
    return 0;
  }
};


