const user ={
    username : "Lokesh",
    loginCount : 10,
    signedIn : true
}

console.log(user.username)

//constructor function
function users(userName, logincount){
    this.userName = userName;
    this.logincount = logincount
    //this.userName is a variable
    //myuserName = userName
    return this;
}

const userOne = new users('Lokesh', 10) //constructor function called due to new keyword
const userTwo = new users('Ram', 20)

console.log(userOne)
console.log(userTwo)

/*
users { userName: 'Lokesh', logincount: 10 }
users { userName: 'Ram', logincount: 20 }
*/