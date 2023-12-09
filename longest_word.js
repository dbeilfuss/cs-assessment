/*
Instructions:
4) Longest Word

Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

For example:

findLongestWord(["hi", "hello"]);
// -> 5
*/

function longestWord(wordList) {
  /*
    I.  Pre-Setup
        1. let longestWord = "" // we'll stick our long word here
        2. let longestWordLength = 0  // we'll increase it if we find a word longer than this
    II. Find the longest word
        1. for (let word of wordList) {
            if (word.length > longestWordLength)  {
                longestWord = word;
                longestWordLength = word.length
            }
    III. Report
        1. console.log (`the longest word was ${longestWord}, with a length of ${longestWordLength} characters`)
        2. return longestWordLength
    */

  // I. Pre-Setup
  let longestWord = "";
  let longestWordLength = 0;

  // II. Find the Longest Word
  for (let word of wordList) {
    if (word.length > longestWordLength) {
      longestWord = word;
      longestWordLength = word.length;
    }
  }

  // III. Report
  console.log(
    `the longest word was ${longestWord}, with a length of ${longestWordLength} characters`
  );
  return longestWordLength;
}

const sentenceList = [
  ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"],
  ["I", "like", "cats", "but", "not", "mice"],
  ["Pack", "my", "box", "with", "five", "dozen", "liquor", "jugs."],
  ["Mr", "Jock", "TV", "quiz", "PhD", "bags", "few", "lynx"],
  ["Short", "sentence"],
  [
    "Long",
    "sentence",
    "I",
    "mean",
    "like",
    "reeeeeeaaaaallllllyyyyy",
    "long",
    "I",
    "seriously",
    "can't",
    "believe",
    "how",
    "enormously",
    "long",
    "this",
    "sentence",
    "is",
    "this",
    "has",
    "to",
    "be",
    "a",
    "run",
    "on",
    "sentence",
    "right",
    "I",
    "mean",
    "you",
    "had",
    "to",
    "have",
    "been",
    "able",
    "to",
    "put",
    "a",
    "period",
    "or",
    "an",
    "exclamation",
    "mark",
    "or",
    "a",
    "question",
    "mark",
    "in",
    "there",
    "somewhere",
    "this",
    "sentence",
    "has",
    "to",
    "be",
    "a",
    "pangram",
    "I",
    "mean",
    "it's",
    "soooo",
    "loooongg",
    "it's",
    "like",
    "three-hundred",
    "and",
    "nineteen",
    "letters",
    "long",
  ],
  [
    "Supercalifragilisticexpialidocious", // practically perfect in every way
    "Antiestablishmentarianism", // opposing the existing government
    "Hippopotomonstrosesquipedaliophobia", // fear of long words
    "Floccinaucinihilipilification", // the habit of estimating things to be worthless
    "Pneumonoultramicroscopicsilicovolcanoconiosis", // a lung disease
  ],
];

longestWord(sentenceList[6]);

/* 
Time Complexity:

    Each of the operations to iterate over the word list, compare each word to the current variable, and store it, occure once per word regardless of the the number of words.  This gives a time complexity of O(n).

Time Complexity = O(n)



Space Complexity:

    The two variables, 'longestWord' and 'longestWordLength' do not really change with the size of the input.  They are essentially constant, with a space complexity of O(1).

Space Complexity = O(n)
 */
