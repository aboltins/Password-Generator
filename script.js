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

let chosenCharTypes = [];

// Function to prompt user for password options
function getPasswordOptions() {
  let charCount = prompt("How many characters would you like your password to contain?");

  if(charCount < 10){
    alert("The Password length must be at least 10 characters");
    return;
  } else if(charCount > 64){
    alert("The Password length must be less than 65 characters");
    return;
  }

  let shouldAddSpecialChar = confirm("Click OK to confirm including special characters");
  let shouldAddNumericChar = confirm("Click OK to confirm including numeric characters");
  let shouldAddLowercaseChar = confirm("Click OK to confirm including lowercase characters");
  let shouldAddUppercaseChar = confirm("Click OK to confirm including uppercase characters");

  if(!shouldAddLowercaseChar && !shouldAddNumericChar && !shouldAddSpecialChar && !shouldAddUppercaseChar){
    alert("Must select at least 1 character type");
    return;
  }

  if (shouldAddSpecialChar) {
    chosenCharTypes.push(specialCharacters);
  }
  if (shouldAddNumericChar) {
    chosenCharTypes.push(numericCharacters);
  }
  if (shouldAddLowercaseChar) {
    chosenCharTypes.push(lowerCasedCharacters);
  }
  if (shouldAddUppercaseChar) {
    chosenCharTypes.push(upperCasedCharacters);
  }

}

// Function for getting a random element from an array
function getRandom(arr) {
  
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
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