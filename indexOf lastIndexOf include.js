let arr=[10,20,30,40,50,60,20,10,20]

console.log(arr.indexOf(20))
console.log(arr.lastIndexOf(20))
console.log(arr.includes(10))
//by using for loop
x=-1
while(true)
{
    x=arr.indexOf(20,x+1)
    console.log(x)
    if(x==-1)
    {
        break
    }
}
console.log(arr.includes(90))