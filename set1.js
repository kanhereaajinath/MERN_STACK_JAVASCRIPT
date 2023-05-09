let s1=new Set([1,2,3,4,5,5,4,5,6,7,8,9])
console.log(s1)
//add element
s1.add(10)
s1.add(20)
s1.add(30)
console.log(s1)
//has method
let s=s1.has(3)
console.log(s)
let s2=s1.has(43)
console.log(s2)
s1.delete(3)
console.log(s1)

console.log(s1.size)



