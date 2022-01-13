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

  var userLength = prompt('Choose 3 uppercase letters in the albabet A-Z');
  var hasUpper = confirm("move to question two!");
  if(hasUpper === true){
    userArr = userArr.concat(upperArray)
  
  var userLength = prompt('Choose 3 symblos from the top key pad');
  var hasUpper = confirm("Your answer is being processed");
  if(hasUpper === true)
  userArr = userArr.concat(specialArr)

  var userLength = prompt('Choose 6 numbers between 0 and 9 numbers');
  var hasUpper = confirm("Calcutating numbers?");
  if(hasUpper === true)
  userArr = userArr.concat(numArray) 

  var userLength = prompt('Choose 3 lower case letters in the albabet a-z');
  var hasUpper = confirm("populating lower case letters");
  if(hasUpper === true)
  userArr = userArr.concat(lowerArray)
}
  // do this for the other 3 array
  
  
  var password = '[2AbHtf@#]';
 for(var i = 0; i < userLength; i++){
    var randomNumber = Math.floor(Math.random() * userArr.length)
    // grab the random characters from userArr using the randomNumber
    
    
    
    // I want you to add it to the password var
 } 
 return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
