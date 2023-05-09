// to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)
function filterRange(arr, a, b) {
    // added brackets around the expression for better readability
    return arr.filter(n => (a <= n && n <= b));
  }
  
  let arr = [5, 3, 8, 1];
  
  let filtered = filterRange(arr, 1, 4);
  
  console.log( filtered ); 
  
  console.log( arr ); 
  