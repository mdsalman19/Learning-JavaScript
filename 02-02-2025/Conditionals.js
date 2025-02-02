/* Question: Write a program that takes a number and checks if it is divisible by 3, 5, or both:

If the number is divisible by both 3 and 5, print "FizzBuzz".
If it is divisible only by 3, print "Fizz".
If it is divisible only by 5, print "Buzz".
If it is not divisible by either 3 or 5, print "Not divisible by 3 or 5".
Try writing the code for this, and let me know if you need any help!
*/

/* let a = prompt("Enter a number: ")
a = parseInt(a);
if (a % 3 == 0 && a % 5 == 0){
    alert("FizzBuzz")
}
else if (a % 3 == 0){
    alert("Fizz")
}
else if (a % 5 == 0){
    alert("Buzz")
}
else 
alert("Not divisible by 3 or 5")*/

// This particularly will run in browsers only ... for node.js these codes given below

const readline = require('readline');  // Import readline module

// Create a readline interface
const pl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout
});

// Prompt user to enter a number
pl.question("Enter a number: ", function(a) {
  a = parseInt(a);  // Convert input to an integer
  
  // Check divisibility and print corresponding message
  if (a % 3 == 0 && a % 5 == 0) {
    console.log("FizzBuzz");
  } else if (a % 3 == 0) {
    console.log("Fizz");
  } else if (a % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log("Not divisible by 3 or 5");
  }

  pl.close();  // Close the readline interface
});



//switch and case
// this is for browser 
let a = prompt("Enter a number: ")
a = parseInt(a)
switch (a) {
    case 1:
        console.log("January")
    break
    case 2:
        console.log("February")
    break
    case 3:
        console.log("March")
    break
    case 4:
        console.log("April")
    break
    case 5:
        console.log("May")
    break
    case 6:
        console.log("June")
    break
    case 7:
        console.log("July")
    break
    case 8:
        console.log("August")
    break
    case 9:
        console.log("September")
    break
    case 10:
        console.log("October")
    break
    case 11:
        console.log("November")
    break
    case 12:
        console.log("December")
    break
    default:
        console.log("Invalid Number")
}


const readline = require('readline'); // Import readline module

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout
});

// Ask the user to enter a number
rl.question("Enter a number: ", function(a) {
    a = parseInt(a);

    // Check if the input is a valid number
    if (isNaN(a)) {
        console.log("Invalid input");
    } else {
        switch (a) {
            case 1:
                console.log("January");
                break;
            case 2:
                console.log("February");
                break;
            case 3:
                console.log("March");
                break;
            case 4:
                console.log("April");
                break;
            case 5:
                console.log("May");
                break;
            case 6:
                console.log("June");
                break;
            case 7:
                console.log("July");
                break;
            case 8:
                console.log("August");
                break;
            case 9:
                console.log("September");
                break;
            case 10:
                console.log("October");
                break;
            case 11:
                console.log("November");
                break;
            case 12:
                console.log("December");
                break;
            default:
                console.log("Invalid Number");
        }
    }

    // Close the readline interface
    rl.close();
});
