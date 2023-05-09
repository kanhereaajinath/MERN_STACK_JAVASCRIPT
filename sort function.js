let arr=[1,15,2,3]
arr.sort()
console.log(arr)
function check(a,b)
{
if(a==b) return 0
if(a>b) return 1
if(a<b) return -1
}
let arr1=[1,2,15,40]
arr.sort(check)
console.log(arr1)