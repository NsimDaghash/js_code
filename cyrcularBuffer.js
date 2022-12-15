/*

Instructions
A circular buffer, cyclic buffer or ring buffer is a data structure that uses a single, fixed-size buffer as if it were connected end-to-end.

A circular buffer first starts empty and of some predefined length. For example, this is a 7-element buffer:

[ ][ ][ ][ ][ ][ ][ ]
Assume that a 1 is written into the middle of the buffer (exact starting location does not matter in a circular buffer):

[ ][ ][ ][1][ ][ ][ ]
Then assume that two more elements are added — 2 & 3 — which get appended after the 1:

[ ][ ][ ][1][2][3][ ]
If two elements are then removed from the buffer, the oldest values inside the buffer are removed. The two elements removed, in this case, are 1 & 2, leaving the buffer with just a 3:

[ ][ ][ ][ ][ ][3][ ]
If the buffer has 7 elements then it is completely full:

[5][6][7][8][9][3][4]
When the buffer is full an error will be raised, alerting the client that further writes are blocked until a slot becomes free.

When the buffer is full, the client can opt to overwrite the oldest data with a forced write. In this case, two more elements — A & B — are added and they overwrite the 3 & 4:

[5][6][7][8][9][A][B]
3 & 4 have been replaced by A & B making 5 now the oldest data in the buffer. Finally, if two elements are removed then what would be returned is 5 & 6 yielding the buffer:

[ ][ ][7][8][9][A][B]
Because there is space available, if the client again uses overwrite to store C & D then the space where 5 & 6 were stored previously will be used not the location of 7 & 8. 7 is still the oldest element and the buffer is once again full.

[C][D][7][8][9][A][B]

*/

let readlineSync = require('readline-sync');   //to get input from terminal

let arr = [];

function forcedWrite(arr){  // function to force write in the array
    let newInput = readlineSync.question("\n enter a value :");
    arr.shift();
    arr.push(newInput);
    return(arr);
}

function overWrite(arr){  // function to force write in the array
    // ifthe input is more than one value .put it in another array an concrATE TO THE ORIGINAL ARRAY
    let newInput = readlineSync.question("\n enter a value :");
    arr.push(newInput)
    return(arr);
}

function deleteItem(arr){
    let itemsToDelete = readlineSync.question("\n how many element you want tyo delete : ");
    if (itemsToDelete > arr.length ){
        console.log("you don't have that much of element in the buffer");
        return;
    }
    for ( let i=0;i<itemsToDelete;i++){
        arr.shift();
    }
}

let circularBuffer = function(arr) { 
    do{
        console.log("what do you want to do ?");
        console.log("1. Write to the buffer ");
        console.log("2. Delete from the buffer ");
        console.log("3. exit!");
        let choiseValue = readlineSync.question("\n enter a value :");
        if (choiseValue==3){
            return;
        }

        if (arr.length<7 && choiseValue==1 ){
            overWrite(arr);
        }
        if (arr.length ==7 && choiseValue==1 )
        {
            console.log("Buffer is full,further writes are blocked until a slot becomes free");  
            let forceInput = readlineSync.question("\n do you want to force write ? :").toLowerCase();
            if(forceInput=='y'){ forcedWrite(arr)}
        }
        if (choiseValue == 2 && arr.length>0){
            deleteItem(arr);
        }else{
            console.log("its an empty buffer !");
        }
        console.log(arr);
    }
while (true);
}

circularBuffer(arr);
