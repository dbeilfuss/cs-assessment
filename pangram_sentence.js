/*
3) Pangram Sentence

A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

Write a function to check a sentence to see if it is a pangram or not.

For example:

isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

isPangram("I like cats, but not mice");
// -> False
*/

function isPangram(sentence) {
  let steps = 0;

  /* 
    I. Pre-Setup
        1. object containing all letters with isIncluded Boolean
            ie.abc = {a: false,
                b: false, ...}
        2. variable let sentenceIsPangram: Type Boolean = true by default
    II. Cleanup the String
        1. lowercase each letter - cleanedSentence = sentence.toLowerCase()
        2. take out spaces - cleanedSentence = cleanedSentence.replace(\/s+/g, '')
            \s matches any whitespace character (including spaces, tabs, and line breaks).
            + means "one or more of the preceding token" (in this case, one or more whitespace characters).
            g is the global flag, indicating that the replace should happen for all instances of the pattern in the string, not just the first occurrence.
        3. seperate letters into an array for ease of use - sentenceArray = sentence.split('')
        4. stacked: sentenceArray = sentence.toLowerCase().replace(/\s+/g, '').split('')
    III. Track the letters
        1. for (letter in sentenceArray) {abc[letter] = true}
    IV. Report
        1. for (letter in abc) { 
            if (letter === false) {
                console.log (`sentence did not include ${letter}`)
        2. return sentenceIsPangram
            }
    */

  //  I. Pre-Setup
  let abc = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    m: false,
    n: false,
    o: false,
    p: false,
    q: false,
    r: false,
    s: false,
    t: false,
    u: false,
    v: false,
    w: false,
    x: false,
    y: false,
    z: false,
  };

  let sentenceIsPangram = true;

  //  II. Cleanup the String
  const sentenceArray = sentence.toLowerCase().replace(/\s+/g, "").split("");
  steps = steps + sentence.length * 3; // approx three cleanup operations per character
  console.log(sentenceArray);

  // III. Track the letters
  for (let letter of sentenceArray) {
    steps++;
    abc[letter] = true;
  }

  // IV. Report
  for (let letter in abc) {
    steps++;
    if (abc[letter] === false) {
      sentenceIsPangram = false;
      console.log(`Sentence does not include "${letter}"`);
    }
  }
  console.log(`sentence is${sentenceIsPangram ? "" : " not"} a pangram`);
  console.log(sentenceIsPangram);
  console.log(
    `completed sentence of length ${sentenceArray.length} in ${steps} steps`
  );
  return sentenceIsPangram;
}

const sentences = [
  { sentence: "The quick brown fox jumps over the lazy dog!", isPangram: true },
  { sentence: "I like cats, but not mice", isPangram: false },
  { sentence: "Pack my box with five dozen liquor jugs.", isPangram: true },
  { sentence: "Mr. Jock, TV quiz PhD, bags few lynx.", isPangram: true },
  {
    sentence: "The quick brown fox jumped over the lazy dog.",
    isPangram: false,
  },
  { sentence: "Pack my box of five dozen liquor jugs.", isPangram: false },
  { sentence: "Short sentence.", isPangram: false },
  {
    sentence:
      "Long sentence, I mean like reeeeeeaaaaallllllyyyyy long, I seriously can't believe how enormously long this sentence is, this has to be a run on sentence, right, I mean you had to have been able to put a period or an exclamation mark or a question mark in there somewhere, this sentence has to be a pangram, I mean it's soooo loooongg, it's like three-hundred and nineteen letters long.",
    isPangram: false,
  },
];

isPangram(sentences[7].sentence);

/* 
Time Complexity:

II. Cleanup the String
    The operations to cleanup the string are all linear, with a complexity of O(n).

III. Track the Letters
    The Loop iterating over the 'sentenceArray' goes through just once, making it also linear, O(n).

IV. Report
    The loop iterating over the 'abc' object is a constant time operation, always have 26 iterations regardless of the sentence length, O(1).

Length: Steps: Ratio:
14      86      1:6
20      122     1:6
33      180     1:5
36      195     1:5
319     1507    1:5

The overall time complexity is 0(n).

Time Complexity = O(n)



Space Complexity:
The 'abc' object is constant, O(1).
The 'sentenceArray' object is proportional to the length of the cleaned input sentence, O(n)
The main factor here ends up being the space used by 'sentenceArray', O(n)

Space Complexity = O(n)

 */
