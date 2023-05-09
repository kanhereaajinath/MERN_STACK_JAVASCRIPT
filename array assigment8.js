//Extract the money
//We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.
//Create a function extractCurrencyValue(str) that would extract the numeric value from such 
//string and return it.
//The example:
//alert( extractCurrencyValue('$120') === 120 ); // true
function extractCurrencyValue(str)
{
        return str.slice(1);
      
}

console.log(extractCurrencyValue("$120")==120)
let s2="$Aajinath"
console.log(s2.slice(1))
