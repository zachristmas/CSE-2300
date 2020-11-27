function bubbleSort1() {
    //prompt the user for a number  
    let input = prompt("Please enter a number");
    //check for input for integer type 
    if (input != null || Number.isInteger(prompt)) {
      //use input to generate array of random integers
      let unsortedArray = [...Array(Number.parseInt(input))].map(() => Math.floor(Math.random() * (Number.parseInt(input) * 10)));
      //display unsorted array to user
      alert(`Unsorted Array: ${unsortedArray}`);
      //init variables
      let swapp = false;
      //set variable for iteration count
      let n = unsortedArray.length - 1;
      //declare sorted array variable
      let sortedArray = unsortedArray;
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
  
      alert(`Sorted Array: ${sortedArray}`);
    }
    else {
      alert('User input error!');
    }
  }