// Q1 Use logical operators to find whther the age of a person lies between 10 and 20
let age = 12;
if (age >= 10 && age <= 20){
    console.log("Valid age")}
else{ console.log("Invalid Age")

console.log("\n")}

// Q2 Demonstrate the use of switch case statement in JS
let numb = 45;
switch (numb) {
    case 1:
        console.log("One");
    break
    case 2:
        console.log("Two");
    break
    case 3:
        console.log("Three");
    break
    case 4:
        console.log("Four");
    break
    default:
        console.log("Invalid")
}
console.log("\n")


// Q3 Write a JS to check whther a number is divisible by 2 and 3
let d = 30
if (d % 2 == 0 && d % 3 == 0){
    console.log("It is divisible")}
else {console.log("It is not divisible")}

console.log("\n")


// Q4 printyou can drive or you cannot drive based on age using ternary operators
let Age = 200;
let quest =((Age>18)? "You can drive" : "You cannot drive")
console.log(quest)