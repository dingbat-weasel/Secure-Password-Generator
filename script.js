// Dataset
var lowerLetterSet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperLetterSet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numericSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharSet = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate Password
function generatePassword() {
  console.log("The button has been clicked!");
  // Prompt user for length of password 8 < 128
  var passLength = Number(
    prompt(
      "How many characters would you like your password to be (number between 8 and 128)?"
    )
  );
  console.log(typeof passLength, passLength);

  // Validate Correct Length and Type
  if (passLength < 8 || passLength > 128 || !passLength) {
    alert("Please enter a number between 8 and 128.");
    return "";
  }

  // Prompt user for which characters (lowercase, uppercase, numeric, special characters) we want in the password
  var lowerPrompt = confirm(
    "Please select which character types you wish to include in the password (lower, upper, numeric, special). You must choose at least one. Would you like to include lowercase letters?"
  );
  console.log(`lower = ${lowerPrompt}`);

  var upperPrompt = confirm("Would you like to include uppercase letters?");
  console.log(`upper = ${upperPrompt}`);

  var numericPrompt = confirm("Would you like to include numbers?");
  console.log(`numeric = ${numericPrompt}`);

  var specialPrompt = confirm("Would you like to include special characters?");
  console.log(`special = ${specialPrompt}`);

  // Generate password

  var generatedPass = function (length, lower, upper, numeric, special) {
    // Starting pass string
    password = "";

    // Push random array element to password string
    for (i = 0; i < length; i++) {
      // Get Random Element from  Random Array
      var randomArray = [];
      if (lowerPrompt) {
        var randomLower = lower[Math.floor(Math.random() * lower.length)];
        randomArray.push(randomLower);
      }
      if (upperPrompt) {
        var randomUpper = upper[Math.floor(Math.random() * upper.length)];
        randomArray.push(randomUpper);
      }
      if (numericPrompt) {
        var randomNumeric = numeric[Math.floor(Math.random() * numeric.length)];
        randomArray.push(randomNumeric);
      }
      if (specialPrompt) {
        var randomSpecial = special[Math.floor(Math.random() * special.length)];
        randomArray.push(randomSpecial);
      }

      var randomCharacter =
        randomArray[Math.floor(Math.random() * randomArray.length)];

      // Write to String
      password += randomCharacter;
    }
  };

  // Call Password Generation Function using Sets
  generatedPass(
    passLength,
    lowerLetterSet,
    upperLetterSet,
    numericSet,
    specialCharSet
  );

  // Return Password; and if no character types chosen then return alert
  if (lowerPrompt || upperPrompt || numericPrompt || specialPrompt) {
    return password;
  } else {
    alert("You must choose at least one character type.");
    return;
  }
}
