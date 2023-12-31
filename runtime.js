const perf = require("execution-time")();

function doublerAppend(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.push(num);
  }
}

function doublerInsert(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.unshift(num);
  }
}

function getSizedArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
}

const tinyArray = getSizedArray(10);
const smallTinyArray = getSizedArray(50);
const smallArray = getSizedArray(100);
const mediumSmallArray = getSizedArray(500);
const mediumArray = getSizedArray(1000);
const largeMediumArray = getSizedArray(5000);
const largeArray = getSizedArray(10000);
const verylargeArray = getSizedArray(50000);
const extraLargeArray = getSizedArray(100000);
const extraExtraLargeArray = getSizedArray(500000);
const extremelyLargeArray = getSizedArray(1000000);

// How long does it take to double every number in a given
// array?

const currentArray = extraLargeArray;

// Try it with second function
perf.start();
doublerInsert(currentArray);
let resultsInsert = perf.stop();

// Try it with first function
perf.start(); // Starts timer
doublerAppend(currentArray);
let resultsAppend = perf.stop(); // Stops timer and save time results

console.log("Results for the extraLargeArray");
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
