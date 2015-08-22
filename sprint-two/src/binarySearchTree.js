var BinarySearchTree = function(value){
  this.value = value;
  this.left = null; 
  this.right = null; 
};


BinarySearchTree.prototype.insert = function (value){
  
  function innerFunc (parentNode, newValue) {
    if (newValue < parentNode.value){
      if (parentNode.left === null) {
        parentNode.left = new BinarySearchTree(newValue);
      } else {
        innerFunc(parentNode.left, newValue);
      }
    } else if (newValue > parentNode.value) {
      if (parentNode.right === null) {
        parentNode.right = new BinarySearchTree(newValue);
      } else {
        innerFunc(parentNode.right, newValue)
      }
    }
  }
  innerFunc(this, value)
};

BinarySearchTree.prototype.contains = function (value){
  
  function innerFunc (parentNode, searchVal) {
    if (parentNode.value === searchVal) {
      return true;
    } else if (parentNode.value > searchVal) {
      if (parentNode.left !== null) {
        return innerFunc(parentNode.left, searchVal);
      } else {
        return false;
      }
    } else if (parentNode.value < searchVal) {
      if (parentNode.right !== null) {
        return innerFunc(parentNode.right, searchVal);
      } else {
        return false;
      }
    }
  }
  return innerFunc(this, value);
};

BinarySearchTree.prototype.depthFirstLog = function (callback){
  
  function innerFunc (currentNode) {
    debugger;
    callback(currentNode.value)
    // base case
    if (currentNode.left === null && currentNode.right === null) {
      return;
    // recursive case
    }
    if (currentNode.left !== null){
      innerFunc(currentNode.left);
    }
    if (currentNode.right !== null){
      innerFunc(currentNode.right);
    }
  }
  innerFunc(this);
};
/*
 * Complexity: What is the time complexity of the above functions?
 */



















