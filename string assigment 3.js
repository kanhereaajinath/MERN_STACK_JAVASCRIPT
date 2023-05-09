//write the function pascalize(str) that changes dash-seprated words like "my-short-strig"into pascal
 //case
 let s1="my-short-sring"
console.log(s1)
let arr=s1.split("-")
console.log(arr)
let s2=""
let y=0
arr.forEach(function name(n) {
    if(y==1)
        {
           s2=n
            y=1
    
           return s2
        }
        let x
        if(  x=n.codePointAt(0)-32)
        {
       
        n=n.replace(n.charAt(0),String.fromCharCode(x))
        s2+=n
        return s2
        }
    })
    console.log(s2)