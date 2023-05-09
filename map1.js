let a1=new Map()
a1.set(1,"marathi")
a1.set(2,"English")
a1.set(3,"Math")
a1.set(4,"Phy")
a1.set(5,"chem")
a1.set(6,"Bio")

console.log(a1)
//get 
let v1=a1.get(2)
console.log(v1)
//delete
a1.delete(3)
console.log(a1)
//has 
let f=a1.has(1)
console.log(f)
//keys
let mykeys=a1.keys()
for(const x of mykeys)
{
    console.log(x)
}//values
for(const v of a1.values())
{
    console.log(v)
}
//entries
for(const item of a1.entries())
{
    console.log(item[0],item[1])
}
