var generateBtn = document.querySelector("#generate");


// arrays that display all of the possible choices
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['@', '%', '+', '/', "*", '!', '#', '$', '^', '?', ':', ',', '~', '.', '&', ''];

// function that asks the user to imput an imput between 8 and 128 and restarting if the answer isnt inbetween them 

function generatePassword() {
    var length = prompt("Please choose a password length betwen 8 and 128 characters long")
    if(length <8 || length >128){
        alert("Please choose a value between 8 and 128")
        return;
    }

    var passwordOptions = questions();
    var possibleCombo = [];
    var finalPassword = "";


// function asking all of the other imputs from the array 

function questions() {
  var isValid = false;
  do {
    var askNumbers = confirm("Do you want your password to include numbers?");
    var askLowerCase = confirm("Do you want your password to include lower case letters?");
    var askUpperCase = confirm("Do you want your password to include upper case letters?");
    var askSpecial = confirm("Do you want your password to include special characters?");
    var responses = {
      length: length,  
      askNumbers: askNumbers,
      askLowerCase: askLowerCase,
      askUpperCase: askUpperCase,
      askSpecial: askSpecial
    } 
 if((!askNumbers)&&(!askLowerCase)&&(!askUpperCase)&&(!askSpecial))
    alert("Must choose at least one variable.");
    else
    isValid = true;

  } while(!isValid);
  return responses;
}
// this function takes all of the responses and spits out a random password
  if (passwordOptions.askNumbers) {
    for (var i of numbers)
      possibleCombo.push(i);
  }
  if (passwordOptions.askLowerCase) {
    for (var i of lowerCase)
      possibleCombo.push(i);
  }
  if (passwordOptions.askUpperCase) {
    for (var i of upperCase)
      possibleCombo.push(i);
  }
  if (passwordOptions.askSpecial) {
    for (var i of special)
      possibleCombo.push(i);
  }

  console.log(possibleCombo);
//creates a randomly generated and ordered password
  for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random()*possibleCombo.length)];
    
  }
  console.log(finalPassword);

  return finalPassword;
}

//displays password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// allows the event listener to wait for a click 
generateBtn.addEventListener("click", writePassword);