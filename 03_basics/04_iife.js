// Imediately Invoked function execution (IIFE)

// Sometimes when we want to execute a function imediately (ex. when our program starts) we use IIFE
// Usually used to get data from database when the program starts

(function one(){          //This is named IIFE
    console.log(`DB connected`)
})();//-> calling of function
//We wrap the function in ()
//Then we call the function by () at the end
//Semicolon (;) is required to execute code or other functions after IIFE

( (name) => {
    console.log(`Your name is ${name}`)
})("Lokesh")//Calling the function and passing a value to it.