//Declaration of a function

function funName(){
    console.log("Function is called")
}

//Calling a function
funName()

//function to add two numbers
function addTwoNumbers(number1, number2){
                                    //Actually we first check the datatype of variable, if it is a number or not
                                    //by using if-else
    let result = number1 + number2
    // console.log(result)

    return result //function is returning result as a output
    
    //Nothing will get executed after return statement
}

let PrintResult = addTwoNumbers(3,7) //storing output of function in a variable
console.log(PrintResult)

//console.log(addTwoNumbers(3,5)) 


//
function loginUserMeaasge(username){
    if (!username) {        // ( !username -> username === undefined)
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in!!`
}

// loginUserMeaasge("Lokesh")❌
//It will not print because we had not given any instruction for printing, it just returned the value

let message = loginUserMeaasge("Lokesh")
console.log(message)

//If we does not pass any value to the function it will return 'undefined'
console.log(loginUserMeaasge())


//If we have only one parameter in function but user passes more than one arguments while calling the
//function we can handle it like this

// (...num1) -> this is 'Rest operator', but this is also called 'spread operator' depending on use cases
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(100,200,300,400))
//The output will be in array form -> [ 100, 200, 300, 400 ]
//Then we can iterate through array with loops and calulate the toatal price 

//Similarly
function calculateCartPrice22(val1,  val2, ...num1){
    return num1
}

console.log(calculateCartPrice22(100,200,300,400))
// num1 output -> [ 300, 400 ]
//Here first two values will be provided to val1 and val2 respectively and rest of them will be provided 
// to the num


//Passing a object to a function and using it
const user = {
    username : "Lokesh",
    id : "abc@google.com"
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and ID is ${anyObject.id}`)
}

handleObject(user)

//We can also directly pass a object to a funtion rather than creating a new object and then passing it
handleObject({
    username : "Sam",
    id : "xyz@google.com"
})


//Passing a array to a function and using it
const myNewArray = [100,200,3000,5000]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)) // Output -> 200