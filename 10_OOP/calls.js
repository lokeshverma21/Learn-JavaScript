function setUserName(userName){
    this.userName = userName
    console.log("Function is called")
}

function createUser(userName,email){
    setUserName.call(this, userName)
    this.email = email
}

const user1 = new createUser("Lokesh","abc@google.com")
console.log(user1)

/*
Function is called
createUser { userName: 'Lokesh', email: 'abc@google.com' }
*/