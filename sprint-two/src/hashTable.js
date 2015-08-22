var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //this._buckets._storage = [];
};

HashTable.prototype.insert = function(k, v){
  

  if the bucket is undefined, assign an empty array to that bucket (location i) and set the k v pair and if the k is the same, overwrite the v 
  else if its not undefined (there is an array there), (you know there are k,v pairs), and the k is not the same, then assign the new [kv] to that tuple 
      if the k is the same, overwrite the value

we are setting the empty array initially, and if we know how to get the empty array at the time of insert, we know how to push to it, and overwrite it, and check its values







  // hash of the key we are passing in
  var i = getIndexBelowMaxForKey(k, this._limit);

  //if the limited array's 0'th position is undefined 
  if (this._storage.get(i) === undefined) {
  
    //iterate through the length of the limited array
    for (var j = 0; j < this._limit; j++) {
  
      //put an empty array in each position of the LA
      this._storage.set(i, []);
  
    }
  }

  // store the bucket of the key we passed in to currentBucket
  var currentBucket = this._storage.get(i);

  // if the current bucket has a key/value pair (tuple), then....
  if (currentBucket.length > 0){

    // create a new empty bucket
    var newBucket = [];

    // iterate over the current tuples in the bucket
    for (var z = 0; z < currentBucket.length; z++) {
      if (currentBucket[z] !== k){
        
        newBucket.push(this._storage.get(z));
        // push each tuple key/value pair into newBucket
      }

    }
    newBucket.push([k, v]);
    // create (set) a new bucket at position i (key)
    // were replacing the old bucket with a new bucket
    // were doing this so we dont overwrite our original bucket
    this._storage.set(i, newBucket)
  } else {

    // otherwise (if the bucket is empty), insert our k/v pair
    this._storage.set(i, [[k, v]])
  }

};

HashTable.prototype.retrieve = function(k){

  // use our hash to convert our key into a hash
  var i = getIndexBelowMaxForKey(k, this._limit);

  // store the bucket into currentbucket
  var currentBucket = this._storage.get(i);

  // iterate over the tuples in our bucket
  for (var j = 0; j < currentBucket.length; j++) {

    // if the current key in our bucket is equal to our key parameter
    console.log(currentBucket[j][0])
    if (currentBucket[j][0] === k) {

      // then return the key's value
      return currentBucket[j][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket) {
    for (var z = 0; z < bucket.length; z++) {

      // console.log(bucket[z][0])
      if (bucket[z][0] === k) {

        delete bucket[z];
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
