

// Q1 Create a variable of type string and add a number to it";
let a = "This is a string."
let b = 456
console.log(a + b)  // You can concatenate string and Number in js

// Q2 use type operators to find data type of string
let s = "This is a string"
console.log(typeof s)

// Q3 create a const object in js. can you hold it to change it to a number later
const j = {
    name : "Salman",
    class : "Seventh",
    isIdiot : false,
    }

// q4 add new item in Q3
j["friend"] = "Harry Potter" // Can add new key value pairs 
j["class"] = "Eighth" // Same as dict values can be changed
console.log(j)
// Q5. Write 5 words and meaning
dict = {
    "One" : 1,
    "Two" : 2,
    "Three" : 3
    }
console.log(dict.Three)
console.log(dict["Three"]) // both can be used to access object(dictionary)