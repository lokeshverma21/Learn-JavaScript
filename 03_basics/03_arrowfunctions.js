const user = {
    userName: "Lokesh",
    email:"abc@google.com",

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website.`);
        console.log(this)//Output ->{
            //userName: 'Lokesh',
           // email: 'abc@google.com',
           // welcomeMessage: [Function: welcomeMessage]
          //}
    }
}
// 'this' refers to current context 
// user.welcomeMessage()
// user.userName = "Sam"
 user.welcomeMessage()

console.log(this) //output -> {} in node
//But if we perform same thing in browser console we get 'window' object


function One(){
    console.log(this)
}

One()
//Output 
/*
<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 78.90829998254776,
      nodeStart: 4.579100012779236,
      v8Start: 11.945299983024597,
      bootstrapComplete: 55.11159998178482,
      environment: 29.170300006866455,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1707757446088.595
  },
  fetch: [AsyncFunction: fetch]
}
*/


//Arrow function    () => {}
const funName = () => {
    console.log("Hello")
    console.log(this) //{}
}

funName()

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3,4))


//Implicit return
//In this we do not use parenthesis{}, so there is no need of return statement also
const sumTwo = (num1, num2) => num1 + num2
console.log(sumTwo(3,5))

//also
const sumThree = (num1, num2, num3) => (num1+num2+num3)
console.log(sumThree(3,4,5))