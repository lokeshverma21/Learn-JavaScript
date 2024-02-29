class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    //in classes we can write the function without using the function keyword
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("Lokesh", "abc@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "xyz@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());