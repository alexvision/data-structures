var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];  // fix me
  
  _.extend(newTree, treeMethods);

  // your code here

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var treeInstance = Tree(value);
  this.children.push(treeInstance);
};

treeMethods.contains = function(target){

  var recursiveHelper = function(curTree) {
    if (curTree.value === target) {
      return true;
    } else {
      var ifAnyChildContains = false;
      for (var i = 0; i < curTree.children.length; i++) {
        if ( recursiveHelper(curTree.children[i]) ) {
          ifAnyChildContains = true;

        }
      }
      return ifAnyChildContains;
    }
  }
  
  return recursiveHelper(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
