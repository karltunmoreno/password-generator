// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var upperArray= ['A','B','C'];
  var lowerArray = ['a','b','c'];
  var numArray = [1,2,3]
  var specialArr = ['!','@','#']
  var userArr = [];

  var userLength = prompt('Choose length between 8 and 128 character');
  var hasUpper = confirm("Do you want upper case charater");
  if(hasUpper === true){
    userArr = userArr.concat(upperArray)
  }
  // do this for the other 3 array
  var password = '';
 for(var i = 0; i < userLength; i++){
    var randomNumber = Math.floor(Math.random() * userArr.length)
    // grab the random characters from userArr using the randomNumber
    // I want you to add it to the password var
 } 
 return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
