/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/
function fakeBin(x){
    //split the string by digits mapping it by numbe
   // return x.split('').map((num) => num > 4 ? 1 : 0).join('');
    let i ,str="" ;
    for (i=0 ;i<x.length ; i++)
      if(parseInt(x[i])>4)
        {
        str = str+"1" ;
          }
      else
        {
          str = str+"0";
        }
    return str;
    
  }