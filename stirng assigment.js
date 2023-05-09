//write a program to get single made of the first 2  and the last 2 char from given a string if the string lenght is less than 2 
//return insted of the empty sting 
let s1 ="Hello world" 
if(s1.length<3)
{
    console.log("  ")
}
console.log(s1.slice(0,2)+s1.at(-2)+s1.at(-1))