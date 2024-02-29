"use strict"; //This line is used to treat all JS code as a newer version of JS.

//alert("verma") // This is used to show pop-up alert in browser, but here it will not work because we are using NodeJS



/*
Primitive datatypes :
String, Number, Boolean, Null, Undefined, Symbol, BigInt

Non Primitive datatypes (or reference datatypes):
Array, Object, Functions
*/

/*
All Primtive datatypes uses Stack memory, so whenever we use or change them after declaration a copy of that
variable is given and the change actualy happens in that copy, not in the original variable.
For example:
*/
let myName = "Lokesh"
let newName = myName

newName = "verma"

console.log(myName)
console.log(newName)
//Here we see when we change our 'newName' there is no change is 'myName'


/*
All non-primitive datatypes uses Heap memory, in which the actual value is passed and whwnever we use them after
declaration the change happens in actual value of the variable
For Example:
*/
let userOne = {
    name: "Lokesh",
    age: 18
}

let userTwo = userOne

userTwo.name = "verma"
userTwo.age = 20

console.log(userOne)
console.log(userTwo)
//Here we can see in the output that the name and age in userOne also changes, but we had only changed userTwo


let name = "Lokesh"  //String Datatype
let age = 18         //Number datatype
let isLoggedIn = true // Boolean datatype

/*
Different datatypes in javascript :
->Number = 2 to power 53
->string = ""
->Boolean = true/false
->null = This itself is a standalone value (This is a represntation of an empty value)
->undefined = when we do not provide value to a function
->symbol = (Used to provide uniqueness)


->object
*/ 

console.log(typeof "Lokesh") // typeof is used to know the data type of the variable or given value.
console.log(typeof age)

//When we try to find type of "null" we get that, it is a "object".
console.log(typeof null)

//When we try to find type of "undefined" we get that, it is a "undefined" type.
console.log(typeof undefined)