//Write a JavaScript function to check whether an `input` is a string or not. Go to the editor
//Test Data :
//console.log(is_string('w3resource'));
//true
//console.log(is_string([1, 2, 4, 0]));
//false
let f=function check(str)
{
     
   if (Object.prototype.toString.call(str) === '[object String]')
    return true;
    else
    {
  return  false
    }
}
console.log(f("aajinath"))
console.log(f([34,53,34,34,3]))