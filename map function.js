let arr=[10,20,30,40,50,60,70,80,90]
let arr1=[]
//long way
for(let i=0;i<arr.length;i++)
{
    let y=arr[i]*arr[i]
    arr1.push(y)
}
console.log(arr1)
//short way
arr.map((n=>console.log(n*n)))