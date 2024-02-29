//Singleton

//declaring objects with the help of constructor
const user = new Object()

user.name = "sammy"
user.email = "sammy@gmail.com"
user.isLoggedIn = false

console.log(user)

//Objects inside objecct
const regularUser = {
    email:"abc@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Sam",
            lastName: "Cool"
        }
    }
}
//accessing object inside object
console.log(regularUser.fullName.userFullName.firstName)


//Merging two objects
const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}

//const mergedObject = Object.assign({}, obj1, obj2)
//Here we are passing {} because all the next value combines and the result will be shown in this {} as a object

//console.log(mergedObject)

//But most of the time we will use spread operator (...obj1,...obj2) to combine multiple objects
const combinedObject = {...obj1,...obj2}
console.log(combinedObject)


//Array of objects
const users = [
    {
        id: "123abc",
        email: "abc@gmail.com",
    },
    {
        id: "123abc",
        email: "abc@gmail.com",
    },
    {
        id: "123abc",
        email: "abc@gmail.com",
    },
    {
        id: "123abc",
        email: "abc@gmail.com",
    }
]

console.log(users[1].email)
//Printing email of 1 value of array


//To get the keys of any objects
console.log(Object.keys(user))
//Output -> [ 'name', 'email', 'isLoggedIn' ] it is in array form and is very usefull

//To get the values of any object (it will also be in array form)
console.log(Object.values(user))
// Output -> [ 'sammy', 'sammy@gmail.com', false ]


//with entries we get every key value pair of the object as a array
console.log(Object.entries(user))
/*
    Output :
    [
        [ 'name', 'sammy' ],
        [ 'email', 'sammy@gmail.com' ],
        [ 'isLoggedIn', false ]
    ]
*/


//To check if that property exists in the object
console.log(user.hasOwnProperty('isLoggedIn'))
// utput -> true/false


//De structuring an object
const course = {
    courseName : "Learn JS",
    price : "999",
    courseInstructer : "SomeOne"
}

//To access any of the above value we don't use .(dot) every time, we will do it like this
const {courseInstructer : instructor} = course

//console.log(courseInstructer)
console.log(instructor)
//we can also give another name to the key as per our requirement