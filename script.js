// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%', 
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//An array that stores possible characters for the password, depending on users chosen char. types.
let charactersToUseForPassword = [];

// A variable that stores the Character count chosen by the user for the password.
let charCount;

// Function to prompt user for password options
function getPasswordOptions() {
  charCount = prompt("How many characters would you like your password to contain?");

  // if statements checks if user violates password length restrictions and then alerts user accordingly.
  if(charCount < 10){
    alert("The Password length must be at least 10 characters");
    return;
  } else if(charCount > 64){
    alert("The Password length must be less than 65 characters");
    return;
  }

  // prompts user to select desired character types to use for password and stores this into variables.
  let shouldAddSpecialChar = confirm("Click OK to confirm including special characters");
  let shouldAddNumericChar = confirm("Click OK to confirm including numeric characters");
  let shouldAddLowercaseChar = confirm("Click OK to confirm including lowercase characters");
  let shouldAddUppercaseChar = confirm("Click OK to confirm including uppercase characters");

  // if statement alerting user accordingly if none of the character types have been chosen.
  if(!shouldAddLowercaseChar && !shouldAddNumericChar && !shouldAddSpecialChar && !shouldAddUppercaseChar){
    alert("Must select at least 1 character type");
    return;
  }

  // based on if user has chosen character type, it's added to the charactersToUseForPassword array.
  if (shouldAddSpecialChar) {
    charactersToUseForPassword = charactersToUseForPassword.concat(specialCharacters);
  }
  if (shouldAddNumericChar) {
    charactersToUseForPassword = charactersToUseForPassword.concat(numericCharacters);
  }
  if (shouldAddLowercaseChar) {
    charactersToUseForPassword = charactersToUseForPassword.concat(lowerCasedCharacters);
  }
  if (shouldAddUppercaseChar) {
    charactersToUseForPassword = charactersToUseForPassword.concat(upperCasedCharacters);
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  
  // Checks if charactersToUseForPassword array isn't empty.
  if(charactersToUseForPassword.length == 0) {
    return;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);