//write a program to get single string from two given string ,seprated by a space and swap the first character each string
let s1="abc"
let s2="xyz"
let x=s1[0,1]
let y=s2[0,1]
s3=s1.replace(x,y)
s4=s2.replace(y,x)
console.log(s3)
console.log(s4)
s1.replace