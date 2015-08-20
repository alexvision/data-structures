var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // if we don't have anything in the list set the initial value to the head
    console.log(this.head)
    // if (this.head == null){
    //    var initialNode = Node(value);
    //    this.head = initialNode;
    // }
    // //if we don't have anything in the list, set this value as the end value
    // if (this.tail === null) {
    //   // debugger;
    //   this.tail = initialNode;
    //   // console.log(initialNode)
    // } else {
    //   var additionalNode = Node(value);
    //   // console.log(additionalNode)
    // }
  };



  list.removeHead = function(){
    
  };

  list.contains = function(target){
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
