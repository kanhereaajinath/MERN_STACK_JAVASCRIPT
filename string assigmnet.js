//write a program to add "ing" at the end of a given string (lentght should be at least 3)
//if the given sting aleredy with 'ing' then add 'ly' insted . if the sting is less than 3,
//leavs it unchanged 
let s1="play"
if(s1.length<3)
{
    console.log(s1)
}
else if(s1.endsWith('ing'))
{
    console.log(s1+'ly')
}
else{
    console.log(s1+"ing")
}