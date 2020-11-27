
function selectionSort1() {
  //prompt the user for a number  
  let input = prompt("Please enter a number");
  //check for input for integer type 
  if (input != null || Number.isInteger(prompt)) {

    //use input to generate array of random integers
    let unsortedArray = [...Array(Number.parseInt(input))].map(() => Math.floor(Math.random() * (Number.parseInt(input) * 10)));
    //display unsorted array to user
    console.log(`Unsorted Array: ${unsortedArray}`);

    //define compare function for selection sort
    function compare(a, b) {
      return a - b;
    }

    //declare and set starting variables
    let min = 0;
    let index = 0;
    let temp = 0;
    let sortedArray = unsortedArray;

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

    console.log(`Sorted Array: ${sortedArray}`);

  }
  else {
    console.error('User input error!');
  }
}