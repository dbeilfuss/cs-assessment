/* Instructions:
Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

For example:

addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True

*/

function generateRandomArray(length) {
  // Generates an array of set length
  let randomArray = [];
  for (let i = 0; i < length; i++) {
    // Generate a random number between -100 and 100
    let randomNumber = Math.floor(Math.random() * 201) - 100;
    randomArray.push(randomNumber);
  }
  console.log(randomArray);
  return randomArray;
}

function addToZero(array) {
  let steps = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      steps++;
      const num1 = array[i];
      const num2 = array[j];
      const sum = num1 + num2;
      if (sum === 0) {
        console.log(`array[${i}]: ${num1} + array[${j}]: ${num2} = 0`);
        return true;
      }
    }
  }
  console.log("no numbers added to zero");
  console.log(`completed in ${steps} steps`);
  return false;
}

addToZero(generateRandomArray(11));

/* 
Time Complexity:

Each number added to the test array would need to be added to all the numbers before it:

Both the outer loop and the inner loop must run approximately 'n' times.  Because they're nested, they are multiplied together (n * n = n²).

Time Complexity = O(n²)

I would think that this would mean that an array of 10 would take 100 steps to complete, but this is not the case.

Length: Steps:  Ratio:
2       1       2:1
3       3       1:1
4       6       2:3
5       10      1:2
6       15      1:2
7       21      1:3
8       28      1:3
9       36      1:4
10      45      1:4
11      55      1:5



Space Complexity:
The function uses the same amount of space regardless of the input size.
It will always use the variables 'i', 'j', 'num1', 'num2', and 'sum'.

This means it has a space complextity that is unchanging or always 1.

Space Complexity = O(1)

 */
