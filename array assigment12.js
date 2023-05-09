//. Write a JavaScript function to clone an array. Go to the editor 
//Test Data : 
//console.log(array_Clone([1, 2, 4, 0])); 
//console.log(array_Clone([1, 2, [4, 0]])); 
//[1, 2, 4, 0] 
//[1, 2, [4, 0]] 
  let array_Clone=function(c)
{
   
   return c.splice(0)
}
console.log(array_Clone([10,20,30,40]))
console.log(array_Clone([1,2,[4,0]]))
