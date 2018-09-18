const deleteNth = function(array, count){
  // Instantiate an empty array ('myArray')
  // Push the first element of 'array' into the new array
  // Check whether the second element of 'array' matches the first element of 'myArray'
  // If they are different, push the second element of 'array' into 'myArray'
  // If they are the same, check 'count'
  let myArray = [];
  // Instantiate an object ('myObject');
  let myObject = {};
  // Instantiate a variable called 'counter'
  let counter = 1;
  myArray.push(array[0]);
  // Put array[0] into 'myObject' as a key, with a value of 1
  myObject[1] = counter;
  console.log(myObject, 'this is what myObject looks like');
  if (array[0] !== array[1]) {
    myArray.push(array[1]);
    counter +=1;
  } else {
    if (count !== 1) {
      // move onto the next element
      // myArray.push(array[1]);
      let myCheck = [];
      myCheck = myArray.filter(function(array){ myCheck.push(array[2]) })
      console.log(myCheck, 'my check')
    } else {
      // continue this process
      myArray.push(array[1])
    }
  }


// jamie.first
// jamie[first]
//
//   let jamie = {
//     first: 'Jamie',
//     last: 'Bort',
//     age: 31
//   }



  return myArray;
}


let arr = [1,1,1,1,1];
let ct = 2;

console.log(deleteNth(arr,ct));
