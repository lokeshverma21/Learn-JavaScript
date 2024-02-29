console.log(2 > 1)
console.log(2 < 1)
console.log(2 == 2)
console.log(2 >= 3)
console.log(2 <= 3)
console.log(2 != 3)

console.log("2" > 1)//This will give "true" because the string "2" gets converted into a number then it is compared
console.log("02" > 1)

console.log(null > 0) //false
console.log(null == 0)//false
console.log(null >= 0)//true
/*The reason for the above output is than an equality check == and comparison > < >= <= works differentyly.
Comparison convert null to a number treating as 0
That's why (0)null >= 0 --> true &
(1)null > 0 --> false
*/

// === "Strict check"
// == will check only the value.
// === will check the value and datatype of the variable also.

console.log("2" == 2) //true
console.log("2" === 2)//flase

