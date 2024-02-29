const score = 200
console.log(score)

//We can declare a number also like this
const balance = new Number(100)
//This is in object form and have various funtions/methods we can perform on it
console.log(balance)

//To convert a number into a string
console.log(balance.toString())

//After converting a number to string we can know perform various functions of string on this
console.log(balance.toString().length)

//To get the precision after decimal we can use toFixed
console.log(balance.toFixed(2))

//To get prcision and rounding off we can use toPrecision
const otherNumber = 2223.9668
console.log(otherNumber.toPrecision(4))
/*Number of significant digits. Must be in the range 1 - 21, inclusive.
Returns a string containing a number represented either in exponential or 
fixed-point notation with a specified number of digits.*/


//To represent a number in a better manner we can use toLocalString
let hundereds = 10000000000
console.log(hundereds.toLocaleString())
//we can represent this number in Indian style also with (en-IN)
console.log(hundereds.toLocaleString('en-IN'))


//*********************Maths********************

//Math is a inbuilt libraly in javascript

//This will give us absolute value of a number, (simply covert negative number in positive)
console.log(Math.abs(-4))

//This will round off a number
console.log(Math.round(4.35))
console.log(Math.round(4.5))

//To round off a number manually, according to our need we have two methods ceil(ceiling) anf floor
console.log(Math.ceil(4.2)) //output -> 5
// This will round off a number to the greater number

console.log(Math.floor(4.8))//Output -> 4
// This will round off the number to the lower number


//To get minimum value out of many numbers we can use Math.min
console.log(Math.min(2,5,9,7))

//To get maximum value out of many numbers we can use Math.max
console.log(Math.max(2,9,4,10,7))


//Mostly we are going to use Math.random
console.log(Math.random())
//Math.random() gives value between 0 and 1 only

//If we multiply a number by 10, a digit shifts
//for example ( 0.345678982 * 10 -> 3.45678982 )
console.log(Math.random() * 10)

/*
If we want a number between 1 and 10 only, we can multiply it by 10.

To deal with such condition ( 0.0123465 * 10 -> 0.123465), where we get zero even after mulyipling by ten we can do,

( (0.0123465 * 10) + 1) -> 1.123465
*/
console.log((Math.random() * 10) + 1)
//also to get only one digit we can use floor and that will be lower value,
console.log(Math.floor(Math.random()*10)+1)

//Min and max **************
const min= 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)