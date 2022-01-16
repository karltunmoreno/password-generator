// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var upperArray= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S',
'T','U','V','W','X','Y','Z'];
  var lowerArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var numArray = [0,1,2,3,4,5,6,7,8,9]
  var specialArr = ['!','@','#','%','$','&','*']
  var userArr = [];

  
  var hasUpper = confirm("Do you want capital letters in your password?");
  if(hasUpper === true){
    userArr = userArr.concat(upperArray)
  }
  var hasSpecial = confirm("Do you want special characters in your password?('!','@','#','%','$','&','*')");
  if(hasSpecial === true) {
  userArr = userArr.concat(specialArr)
  }
  var hasNum = confirm("Do you want numbers in your password?"); 
  if(hasNum === true) {
  userArr = userArr.concat(numArray) 
  }
  
  var hasLow = confirm("Do you want lower case letter in your password?");
  if (hasLow === true) {
  userArr = userArr.concat(lowerArray)
}
  // do this for the other 4 array
  
  var userLength = prompt("Choose a length of at least 8 characters and no more than 128 characters");
  console.log("userLength ", userLength)
  var randomPassword = [];
 for (var i = 0; i < userLength; i++){
  
  var randomNumber = Math.floor(Math.random() * userArr.length);
  randomPassword.push(userArr[randomNumber]);
    // grab the random characters from userArr using the randomNumber in another array
  console.log('randomPassword', randomPassword.join(""));
    // I want to add it to the password var
 }
 console.log('randomPassword', randomPassword.join(""));
 return randomPassword.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
