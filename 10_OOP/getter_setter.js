class user{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        return `${this._password}xyz`
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const lokesh = new user("abc@google.com", "4321")
console.log(lokesh.password)