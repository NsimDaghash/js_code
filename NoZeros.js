/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/
function noBoringZeros(n) {
    const numStr = String(n).split('');  // put the string to array 
    
    if (n === 0) {        // if its an emty string
      return 0;
    }
    
    for (let i = numStr.length-1; i >= 0; i -= 1) {  // run from the end of the string
      
      if (numStr[i] !== '0') {
        return +(numStr.slice(0, i+1).join(''));    // join it to string
      }
    }
  }