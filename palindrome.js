/*
Write a function that checks if a given string (case insensitive) is a palindrome.
*/

function isPalindrome(x) {
    
    let a = x.toLowerCase();
    let b = x.split('').reverse().join('').toLowerCase();
    
    return a===b ? true : false 
  
  }
