/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/
function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let classAvg = 0;
    for (let i = 0; i < classPoints.length; i++){  
      classAvg += classPoints[i];                // the sum of the class points
    }
    classAvg = (classAvg/classPoints.length);   // the average of the class
    return (yourPoints > classAvg);            // if my point greater retun true else return false 
}
