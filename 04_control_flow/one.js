//if

const temperature = 40

//The code in the 'if' satatement will get executed if the condition inside () is 'true'
if (temperature == 40) {
    console.log("Temperature is 40")
}


//if-else

//If the condition in the 'if' statement is false then the code in the 'else' statement will get executed
if (temperature < 40) {
    console.log("Temprature is less than 40")
} else{
    console.log("Temperature is greater than 40")
}


//Scope in if-else
const score = 200

if (score > 100) {
    const power = "Fly"
    console.log(`User power ${power}`)
}


/*This will not get executed because the scope of the variable 'power' is just inside the 'if' statement {}
console.log(`User power ${power}`) ❌*/

//if-else-if
const balance = 1000
if (balance == 500) {
    console.log("Balance is 500")
} else if (balance == 700) {
    console.log("Balance is 700")
} else if (balance == 1000) {
    console.log("Balance is 1000")
}else{
    console.log("Balance is more than 1000")
}
//output -> Less than 1100


//Nullish Coalescing operator (??) : for null & undefined
//We use this when we don't want null and undefined values while fetching data in our projects

let val1;

val1 = 50 ?? 10 
//Output -> 50
//If there is something else than null and undefined it will provide the first value to the variable

val1 = null ?? 10
//Output -> 10

val1 = undefined ?? 20
//Output -> 20

val1 = null ?? 20 ?? 30
//Output 20

console.log(val1)


//Ternary operator
const price = 100

price <= 80 ? console.log("Less than 80") : console.log("Greater than 80")