//Object literals
//Declaration on object like is object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Lokesh",
    "full name" : "Lokesh verma",
    [mySym] : "mykey1", //declaring symbol in an object
    age: 20,
    location: "Jaipur",
    email: "abc@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Sunday"]
}

//Accesing values of objects
// 1. jsUser.email
// 2. jsUser["email"]

console.log(jsUser.email)
console.log(jsUser["email"])

//To access these type of keys ( full name ) we have to use this -> jsUser["full name"]
// because spaces in keys will not be accesable with .(dot)

console.log(jsUser["full name"])

//
console.log(jsUser[mySym])

//changing values of object
jsUser.email = "xyz@google.com"

// freeze a object , for preventing it from changing values
// Object.freeze(jsUser)

// jsUser.email = "cdn@google.com"
// console.log(jsUser)
// Here change in email does not takes place because we freezed the object 


//Adding a new key in object and also using this as function
jsUser.greetings = function(){
    console.log("Hello JS User")
}

console.log(jsUser.greetings())
//output -> Hello JS User
//          undefined


//Refrencing 'name' in object to function
jsUser.greetingsTwo = function(){
    console.log(`Hello JS User ${this.name}`)
}

console.log(jsUser.greetingsTwo())
//output ->        Hello JS User Lokesh
//                 undefined
