var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.firstVal = 0;
  this.lastVal = 0;
};

Queue.prototype.enqueue = function(val) {
  Queue[this.lastVal] = val;
  this.lastVal++;
};
Queue.prototype.dequeue = function() {
  var temp = Queue[this.firstVal];
  delete Queue[this.firstVal];
  this.firstVal++;
  return temp;
};
Queue.prototype.size = function() {
  if (this.lastVal - this.firstVal > 0) {
    return this.lastVal - this.firstVal;
  } else {
    return 0;
  }
};

