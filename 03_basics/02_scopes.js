let a = 10
const b = 20
var c = 30

if (true) {
    let a = 100
    const b = 200
    var c = 300
}

console.log(a) // Output -> 10
console.log(b) // Output -> 20
console.log(c) // Output -> 300

/*
let and const have local scope, means if declare them in a block like if-block or loop and changing in their
values in that block does not effect the value we passed outside that block.

var has a global scope, means if we declare them in a block and tries to change value outside that block 
its value get changed.
Therefore we do not prefer to use var.
*/


//
function One(){
    const userName = "Lokesh"

    function two(){
        const website = "Youtube"
        console.log(userName)
    }
    //console.log(website)
    //This is not accessable, because its scope is only inside the function but we are
    // calling it outside the function

    two()
}

One()


//
if (true) {
    const username = "Lokesh"
    if (username === "Lokesh") {
        const website = " Youtube"
        console.log(username+website)
    }
    //console.log(website)

    //This is not accessable beacuse we are calling it outside of its scope
}

//console.log(username)

//This is not accessable beacuse we are calling it outside of its scope



// ******************** interesting *************************
console.log(addOne(4))
//Here we are accessing function before declartion and the programm will run error free

function addOne(value){
    return value + 1
}


console.log(addTwo(4))
//Here we accessing this function before declaration, but the programm will not get executed
//Beacuse we are declaring this function as a variable and a variable is not accessable before its declaration

//Error : Cannot access 'addTwo' before initialization

//This is also a function but also called as 'Expression'
const addTwo = function(value){
    return value + 2
}

