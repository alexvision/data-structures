var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage.push(item)
};
// constant

setPrototype.contains = function(item){
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      return true;
    }
  }
  return false;
};
// linear

setPrototype.remove = function(item){
for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      this._storage.splice(i, 1);
    }
  }
};
// linear

/*
 * Complexity: What is the time complexity of the above functions?
 */
