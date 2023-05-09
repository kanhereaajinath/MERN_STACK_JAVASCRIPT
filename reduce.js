// Calculating the sum of an array using for loop and reduce in JavaScript.
let arr=[1,2,3,4,5,6,7,8,9,10]
let sum=0;
//long way
for(let i=0;i<arr.length;i++)
{
    sum+=arr[i]
}
console.log(sum)
//short way
let v=arr.reduce((sum,n)=>sum+n,0)
console.log(v)
