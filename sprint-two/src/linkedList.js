var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if (list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function(){
    var current = list.head;
    delete list.head;
    list.head = current.next;
    return current.value;
  };

  list.contains = function(target){
    var current = list.head;
    while (current.next !== null){
      if (current.value === target){
        return true;
      }
      current = current.next;
    }
    if(list.tail.value === target){
      return true;
    }
    return false;
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