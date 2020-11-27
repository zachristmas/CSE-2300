function selectionSort2(arraySize, numOfArrays) {
  console.info(`Array Size: ${arraySize} Number of arrays: ${numOfArrays}`);
  let total_time = 0;
  //prompt the user for a number  
  let input = arraySize;
  //check for input for integer type 
  if (input != null || Number.isInteger(prompt)) {
    for (let i = 0; i < numOfArrays; i++) {
      //use input to generate array of random integers
      let unsortedArray = [...Array(Number.parseInt(input))].map(() => Math.floor(Math.random() * (Number.parseInt(input) * 10)));

      //define compare function for selection sort
      function compare(a, b) {
        return a - b;
      }

      //declare and set starting variables
      let min = 0;
      let index = 0;
      let temp = 0;
      let sortedArray = unsortedArray;

      //init timer
      let running_time = 0;
      //start timer
      let timerStart = performance.now();
      //outer loop iterates over array length
      for (let i = 0; i < sortedArray.length; i += 1) {
        //store index variable
        index = i;
        //assume min value of array equal to current index
        min = sortedArray[i];

        //inner loop iterates over other elements in array (not the values we have already looped over)
        for (let j = i + 1; j < sortedArray.length; j += 1) {
          //compare current index for next lowest value
          if (compare(min, sortedArray[j]) > 0) {
            min = sortedArray[j];
            index = j;
          }
        }

        //store the oringal index value 
        temp = sortedArray[i];
        //update current index value to next lowest value found in the inner loop
        sortedArray[i] = min;
        //swap the stored value with the place of the next lowest value we found
        sortedArray[index] = temp;
      }
      //end timer and add it to total
      let timerEnd = performance.now();
      running_time = timerEnd - timerStart;
      total_time += running_time;
    }
    console.info(`Selection Sorted ${numOfArrays} arrays containing ${arraySize} elements each in an average of ${total_time/numOfArrays} ms`);
  }
}

// selectionSort(500, 1000);
// selectionSort(2500, 1000);
// selectionSort(5000, 1000);