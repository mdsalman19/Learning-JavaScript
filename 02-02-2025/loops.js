// Pattern for for loop in JS
// for (initialization; condition; update) {
//     // Code to execute
// }
for (let i = 1; i < 6; i++){
     console.log("i", i)
}

let fruits = ["apple", "banana", "cherry"]
for (let j = 0; j < fruits.length; j++){
    console.log(fruits[j]);
}

// Write a for loop that prints numbers from 1 to 10.
for (let s = 0; s<10; s++){
    console.log(s+1)
    }

// Modify your loop to print only even numbers between 2 and 20.
for (let e = 1; e <= 20; e++){
    if (e % 2 == 0){
        console.log(e)}
}
// Write a for loop that calculates and prints the sum of the first 10 natural numbers (1 + 2 + 3 + ... + 10).
let sum = 0
for (let a = 1; a < 11; a++){
    sum += a
    console.log(sum)
    }

// Write a for loop that prints numbers from 10 to 1 in descending order.
for (let o = 10; o >=0; o--){
    console.log(o)}

// Given the array below, write a for loop that prints each fruit:
let vegetables = ["carrot", "potato", "tomato"]
for (let v =0; v < vegetables.length; v++){
    console.log(vegetables[v])}

/*
While Loop Questions:
Print Numbers from 1 to 20 Write a while loop to print all numbers from 1 to 20.
*/

num1 = 1
while(num1 <=20){
    console.log(num1)
    num1 += 1}



/*
Sum of Even Numbers Between 1 and 50 Write a while loop to calculate and print the sum of all even numbers between 1 and 50.
*/
let sums = 0;
let p = 1;
while (p<=50){
    if (p % 2 == 0){
    console.log(sums +=p)
    }
    p++
}



/*
Find the First Number Divisible by 7. Write a while loop to find the first number greater than 100 that is divisible by 7.*/
let num = 101;  // Start from the first number greater than 100

while (num % 7 !== 0) {  // Continue looping until num is divisible by 7
    num++;  // Increment num by 1
}

console.log("The first number greater than 100 that is divisible by 7 is:", num);

/*
Function to Check if a Number is Positive, Negative, or Zero (if-else)
*/
function checkNumber(num){
     if (num>0){
          console.log("The number is positive")}
     else if (num==0){
          console.log("The number is zero")}
     else {console.log("The number is negative")
          }
}
checkNumber(5)
checkNumber(45)
checkNumber(-45)
