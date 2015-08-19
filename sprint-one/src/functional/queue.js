var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var begVal = 0;
  var endVal = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[endVal]= value;
    endVal++;
  };

  someInstance.dequeue = function(){
    var dequeued = storage[begVal];
    delete storage[begVal];
    begVal++;
    return dequeued;
  };

  someInstance.size = function(){
    if (endVal - begVal > 0){
      return endVal - begVal;
    } else {
      return 0;
    }
  };

  return someInstance;
};
