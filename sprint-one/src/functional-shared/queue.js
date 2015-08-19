var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.firstVal = 0;
  newQueue.lastVal = 0;

  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};


queueMethods.enqueue = function(val) {
  this[this.lastVal] = val;
  this.lastVal++;
};
queueMethods.dequeue = function() {
  var dequeued = this[this.firstVal];
  delete this[this.firstVal];
  this.firstVal++;
  return dequeued;
};
queueMethods.size = function() {
  if(this.lastVal - this.firstVal > 0){ 
    return this.lastVal - this.firstVal
  } else {
    return 0;  
  }
};

