function bubbleSort2(arraySize, numOfArrays) {
  console.info(`Array Size: ${arraySize} Number of arrays: ${numOfArrays}`);
  let total_time = 0;
  //prompt the user for a number  
  let input = arraySize
  //check for input for integer type 
  if (input != null || Number.isInteger(prompt)) {
    for (let i = 0; i < numOfArrays; i++) {
      //use input to generate array of random integers
      let unsortedArray = [...Array(Number.parseInt(input))].map(() => Math.floor(Math.random() * (Number.parseInt(input) * 10)));
      //console.log(`Unsorted array #${i + 1}: ${unsortedArray}`);
      //init variables
      let swapp = false;
      //set variable for iteration count
      let n = unsortedArray.length - 1;
      //declare sorted array variable
      let sortedArray = unsortedArray;
      //init timer
      let running_time = 0;
      //start timer
      let timerStart = performance.now();
      //loop until swapp is switched to false
      do {
        //set swapp to false once we are out of the inner loop
        swapp = false;
        //begin inner loop
        for (let i = 0; i < n; i++) {
          //check if the first element in the selected index is greater than the next
          if (sortedArray[i] > sortedArray[i + 1]) {
            //delcare variable to store original value for selected index
            let arrayIndex = sortedArray[i];
            //set the current selected index equal to the value of the next one
            sortedArray[i] = sortedArray[i + 1];
            //place the original value that was stored in the next selected index (completes the swap)
            sortedArray[i + 1] = arrayIndex;
            //set swap to true to continue the outer loop
            swapp = true;
          }
        }
        //decrement iteration count
        n--;
      } while (swapp);
      //console.log(`Sorted array #${i + 1}: ${sortedArray}`);
      //end timer and add it to total
      let timerEnd = performance.now();
      running_time = timerEnd - timerStart;
      total_time += running_time;
    }
    console.info(`Bubble Sorted ${numOfArrays} arrays containing ${arraySize} elements each in an average of ${total_time/numOfArrays} ms`);
  }
}

// bubbleSort(500, 1000);
// bubbleSort(2500, 1000);
// bubbleSort(5000, 1000);