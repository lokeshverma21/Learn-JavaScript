//truthy -> when we assume that the value is true for a condition then it will be truthy

/*
Falsy values :
    false, 0, -0, BigInt 0n, "", null, undefined, NaN

Truthy values :
    "0", "false", " ", [], {}, function(){}
*/


const userEmail = "abc@google.com"

if (userEmail) {
    console.log("Got user Email.")
} else{
    console.log("Dot't have user email.")
}
//output -> Got user Email.

const userEmail1 = ""

if (userEmail1) {
    console.log("Got user Email.")
} else{
    console.log("Dot't have user email.")
}
//Output -> Dot't have user email.
//give false when the sring is empty


//To check if a array is empty
const emptyArray = []
if (emptyArray.length === 0) {
    console.log("Array is empty")
}

//To check if a object is empty
const emptyObject = {}
if (Object.keys(emptyArray).length === 0) {
    console.log("Object is empty")
}
//Object.keys(emptyArray). This will give array as output of the object
