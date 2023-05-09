//sort array  in decseding order
let arr=[5,2,11,-10,8]
function check(a,b)
{
    if(a==b) return 0
    if(a>b) return 1
    if(a<b) return -1
}
y=arr.sort(check).reverse()
console.log(y)