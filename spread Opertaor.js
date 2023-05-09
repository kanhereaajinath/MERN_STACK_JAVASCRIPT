//spread Operator 
function sum(...arr)
{
    let z=0
    arr.forEach(n=>{
        z=z+n
    })
    return z
}
let a=sum(10,30)
console.log(a)
a=sum(10,3,2,4,23)
console.log(a)
let arr=[24,645,43,33,44,66]
let arr2=[6,7,8,9]
let p=sum(...arr)
console.log(p)
let q=sum(...arr2)
console.log(q)
let a1=sum(10,...arr,40,...arr2)
console.log(a1)
//convert string into array
let s2="hello"
console.log(...s2)//spread operator
console.log([...s2])//to from array

