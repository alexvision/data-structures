var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var recentVal = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[recentVal] = value;
    recentVal++;
  };

  someInstance.pop = function(){
    var popped = storage[recentVal - 1];
    delete storage[recentVal - 1];
    recentVal--;
    return popped;
  };

  someInstance.size = function(){
    if (recentVal  > 0) {
      return recentVal;
    } else {
      return 0;
    }
  };
  return someInstance;
};
