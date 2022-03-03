/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0]
*/
function digitize(n) {
    
  const resultArr =[]  // the result array
  const num = String(n).split('').reverse();   // split the string to array and reverse it and join it back
  
  num.map((x) => resultArr.push(Number(x)));   // pushing the string character to the array

  return (resultArr);
  
}