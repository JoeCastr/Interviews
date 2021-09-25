/*
Problem:
Write a method that takes a string as an input and converts it to an integer.
Do not use any type of built-in methods like int.Parse or atoi.
Remember it's always good to include both positive and negative test cases.
Error handling of your choice should be done in some way.

Remember to add appropriate comments to explain what you are doing.

Input: string

Return: integer

Example input:
"baseball"
"forty-two"
"repeat after me"
"What in the heck!?"
"EWOXN-9300161-QUX"
"--]{]''?><<>,.//f;s/fa/sfy"
"#($_!+#$)@$%*%"
"hey\ndude\nwhat's\nup?"
" a b cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-=_+\`|~,./<>?\;'[]:"{}n"

Data structure(s):
Object that correlates a number to a string value

Algorithm:
Take string input
split it into individual characters
lookup the number value for the character
--if the character doesn't exist in the library
----use 99 as the number value
--add the number value to the return string
convert the return string to an integer and return

*/

const alphabet = {
  " ": "0",
  a: "1",
  b: "2",
  c: "3",
  d: "4",
  e: "5",
  f: "6",
  g: "7",
  h: "8",
  i: "9",
  j: "10",
  k: "11",
  l: "12",
  m: "13",
  n: "14",
  o: "15",
  p: "16",
  q: "17",
  r: "18",
  s: "19",
  t: "20",
  u: "21",
  v: "22",
  w: "23",
  x: "24",
  y: "25",
  z: "26",
  A: "27",
  B: "28",
  C: "29",
  D: "30",
  E: "31",
  F: "32",
  G: "33",
  H: "34",
  I: "35",
  J: "36",
  K: "37",
  L: "38",
  M: "39",
  N: "40",
  O: "41",
  P: "42",
  Q: "43",
  R: "44",
  S: "45",
  T: "56",
  U: "47",
  V: "48",
  W: "49",
  X: "50",
  Y: "51",
  Z: "52",
  "1": "53",
  "2": "54",
  "3": "55",
  "4": "56",
  "5": "57",
  "6": "58",
  "7": "59",
  "8": "60",
  "9": "61",
  "0": "62",
  "-": "63",
  "_": "64",
  "=": "65",
  "+": "66",
  "\\": "67",
  "|": "68",
  "`": "69",
  "~": "70",
  ",": "71",
  "<": "72",
  ".": "73",
  ">": "74",
  "/": "75",
  "?": "76",
  "\;": "77",
  ":": "78",
  "'": "79",
  "\"": "80",
  "[": "81",
  "{": "82",
  "]": "83",
  "}": "84",
  "!": "85",
  "@": "86",
  "#": "87",
  "$": "88",
  "%": "89",
  "^": "90",
  "&": "91",
  "*": "92",
  "(": "93",
  ")": "94",
  "\n": "95"
}

// Throw an error and stop execution of input is not of type String
function validateInput(input) {
  if (typeof input != "string") {
    throw new Error("Invalid input. Please enter strings only.");
  }
}

// Issue warning message if value is above JavaScript's Max Safe Value
function checkSafetyOfValue(int) {
  if (int > Number.MAX_SAFE_INTEGER) {
    console.log("Warning: the resulting integer is larger than the maximum safe integer in JavaScript.\n" +
                "Some large values (above 9007199254740991) may be represented inaccurately.")
  }
}

// Accept a string as an argument and return an integer
function convertStrToInt(str) {
  validateInput(str);

  // create a string to append the resulting numbers to
  let result = "";
  let individualCharacters = str.split('')
  let validLetters = Object.keys(alphabet);

  for (let i = 0; i < individualCharacters.length; i += 1) {
    let currentCharacter = individualCharacters[i];

    if (validLetters.includes(currentCharacter)) {
      // add the number value from the alphabet object that corresponds to currentCharacter
      result += alphabet[currentCharacter];
    } else {
      result += "99";
    }
  }

  checkSafetyOfValue(Number(result));

  return Number(result);
}
