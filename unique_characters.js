/*
Instructions:

2) Unique Characters

Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

For example:

hasUniqueChars("Monday");
// -> True

hasUniqueChars("Moonday");
// -> False
*/

function hasUniqueChars(testWord) {
  let steps = 0;
  for (let i = 0; i < testWord.length; i++) {
    for (let j = i + 1; j < testWord.length; j++) {
      steps++;
      const letter1 = testWord[i];
      const letter2 = testWord[j];
      const isUnique = letter1 !== letter2;
      if (!isUnique) {
        console.log(
          `testWord[${i}]: ${letter1} === testWord[${j}]: ${letter2}`
        );
        return false;
      }
    }
  }
  console.log("all letters are unique");
  console.log(`completed in ${steps} steps`);
  return true;
}

hasUniqueChars("Monday");

/* 
Time Complexity:

Each additional letter is compared to all the letters before it:

The outer loop runs 'n' times.  The inner loop runs approximately n times on the first iteration of the outer loop, but runs fewer and fewer times with each iteration.  The difference adds up, with the total number of steps being '(n * (n - 1)) / 2'.

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

However, for big O notation, we're looking for the abstract order of growth, not actual step count.  In that case the upper bounds of both loops is approximately n.  Because they're nested, they are multiplied together (n * n = n²).

Time Complexity = O(n²)



Space Complexity:
The function uses the same amount of space regardless of the input size.
It will always use the variables 'i', 'j', 'letter1', 'letter2', and 'isUnique'.

This means it has a space complextity that is unchanging or always 1.

Space Complexity = O(1)

 */
