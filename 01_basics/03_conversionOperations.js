//CONVERT TO NUMBER
let score = undefined

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
/*
Here the "Number()" Operator is used to convert any other datatype to number.
Similarly we have "String()", "Boolean()"
*/
console.log(typeof valueInNumber)
console.log(valueInNumber)

// When we convert different datatypes in to number we get following results

// This is what we get when we try to print value inside the "valueInNumber" variable:
// 33 -> 33(Number)
// "33xyz" -> NaN
// true -> 1 ; flase -> 0
// Null -> 0
// undefined -> NaN

//cONVERT TO BOOLEAN
let isLoggedIn = 1

let boolenIsLoogedIn = Boolean(isLoggedIn)
console.log(boolenIsLoogedIn)

// 1 -> true ; 0 -> false
// "" -> false
// "abc" -> true
// null -> false
// undefined -> false


//CONVERT TO STRING
let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// *******************Operators*******************

let value = 3
let negativeValue = -value
console.log(negativeValue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**4) // 2 to power 4
console.log(2/2)
console.log(2%2)



let str1 = "Hello"
let str2 = " Lokesh"

let str3 = str1 + str2
console.log(str3)


console.log("1" + 2) // -> 12
console.log(1 + "2")//  -> 12
console.log("1" + 2 + 2)// ->122
console.log(1 + 2 + "2")// ->32



let gameCounter = 100

gameCounter++      // Increment operator
//gameCounter--    //Decrement counter
console.log(gameCounter)