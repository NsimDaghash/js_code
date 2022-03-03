/*
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)
*/
function sumStr(a,b) {
    let str ;
    const num = parseInt(a) || 0; // set num to a as integer and if a is empty get the 0 value
    const num1 = parseInt(b) ||0;
    str = num+num1 + "";
    return (str);
  }