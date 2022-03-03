/*
Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"
*/
function nameShuffler(str){
    //Shuffle It
     let tmp;
    let arr=str.split(" ")
    console.log(arr);
    tmp =arr[0];
    arr[0] = arr[1];
    arr[1]= tmp;
    str=arr[0]+" "+arr[1];
    return(str);
  }