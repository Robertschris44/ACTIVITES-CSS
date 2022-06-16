// Assignment Code
var generateBtn = document.querySelector("#generate");
var OptionArr = [];
var characterLenght = 8 ;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
