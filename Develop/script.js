// Assignment code here
// Get references to the #generate element
//Created arrays for the loops to go through
var generateBtn = document.querySelector("#generate");
var passwordBase = [""];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChars = ["!", "@","#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "-", "<", ">", "/", "?"];
var uppercaseAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","S","T","U","V","W","X","Y","Z"];
var lowercaseAlpha = ["a", "b", "c", "d", "e", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var temp= [ ];

function generatePassword() {
  //ask for password length & prompt function
  var length = prompt("Your password must be between 8 and 128 characters!")
  //entering length of the password
  if (length < 8 || length > 128){
  //creating alert statement if they are under or exceed password length
    alert("the password is not within character limits");
  //returning function back to our code
    return generatePassword()
  }

//including a lowercase variable & confirmation function
var addLowercase = confirm("Do you want to add lowercase?")
//creating a boolean to confirm
if (addLowercase == true){
  //including an iterator for the loop
  for (var i = 0; i < lowercaseAlpha.length; i++){
    //assigned to hold temporary variables
    temp.push(lowercaseAlpha[i]);
  }
  // logged into the console
  console.log(addLowercase)
}

// including a uppercase variable & confirmation function
var addUppercase = confirm("Do you want to add uppercase?")
//creating a boolean to confirm
if (addUppercase = true){
  //including a iterator for the loop
  for (var i = 0; i < uppercaseAlpha.length; i++){
    //assigned to hold temporary variables
    temp.push(uppercaseAlpha[i]);
  }
  console.log(addUppercase)
}

//including a special characters variable & confirmation function
var addSpecialchars = confirm("Do you want to add special characters?")
//creating a boolean to confirm
if (addSpecialchars == true){
  for (var i = 0; i < specialChars.length; i++){
    temp.push(specialChars[i]);
  }
  console.log(addSpecialchars)
}

//including a number variable & confirmation function
var addNumber = confirm("Do you want to add numbers?")
//creating a boolean to confirm
if (addNumber == true){
  for (var i = 0; i < numbers.length; i++){
    temp.push(numbers[i]);
  }
  console.log(addNumber)
  
}

console.log(temp)

//creating expressions for the loop
for (var i = 0; i< length; i++){
  passwordBase = passwordBase + temp[Math.floor(Math.random() * temp.length)];
}

//passing the value from the function to return to code
return passwordBase;
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

