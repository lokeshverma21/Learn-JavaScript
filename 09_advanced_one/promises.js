/*
    A Promise is an object representing the eventual completion or failure of an asynchronous operation 
    and its resulting value.

*/

//Create a new promise
const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //ex:- DB calls, cryptography, network calls
    setTimeout(function(){
        console.log("Async task is completed")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promised consumed")
})

//also

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)

}).then(function(){
    console.log("Task 2 consumed")
})


//We can also pass data in resolve
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: 'John', email: 'abc@google.com'})
    },1000)
})

promiseThree.then(function (user) {
    console.log(user)//Output -> { username: 'John', email: 'abc@google.com' }
})


//We can use reject by 'catch' method
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: 'John', password: '12345'})
        }else{
            reject('ERROR: Something went wrong.')
        }
    },1000)
})

//chaining in promise calls, we can use multiple 'then' and 'catch' methods at one time
promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function(error){    //catch is used for reject
    console.log(error)
}).finally(function(){ //this is default function and will ALWAYS get executed
    console.log('The promised is either resolved or rejected')
})


//The next function will only get executed when the first call is consumed/resolved


//We can also use 'async' and 'await' at the place of 'then' and 'catch'
//Using ASYNC AWAIT 
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: 'Jordan', password: '12345'})
        }else{
            reject('ERROR')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive //with async await, wewait for sometime till the function gets excecuted
                                            // mostly used when we call data from database.
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()


//using api
async function allusers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log('Error',error)
    }
}

// allusers()


//*******FETCH*********
/*
    the fetch() function is used to make network requests, typically to retrieve resources (like data or files) 
    from a server. It is a modern and versatile API for making HTTP requests, and it is part of the
    Fetch API standard.

    ->The fetch() function returns a Promise that resolves to the Response to that request.
      so we can use 'then()' , 'catch()' and 'finally()'

    fetch() provides a more modern and flexible alternative to the older XMLHttpRequest for making HTTP requests.
*/

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})