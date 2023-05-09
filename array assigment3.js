//write the function camlize(str) that changes dash-seprated words like "my-short-strig"into camle
 //case
 
function camelize(text) {
   const a = text.toLowerCase()
       .replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
   return a.substring(0, 1).toLowerCase() + a.substring(1);
}
console.log(camelize('My-short-strig'))
//another way
