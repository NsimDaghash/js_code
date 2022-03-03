/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
      let total = 0;
      for(let i = 0; i < marks.length; i++){    // calculates total number of marks
        total += marks[i];
      }
      
      /* returns total number of marks divided by number of marks rounded down to nearest integer */
      return Math.floor(total / marks.length);
  }