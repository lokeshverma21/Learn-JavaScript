//Dates

let myDate = new Date() //Date is an object

// console.log(myDate) //output -> 2024-02-09T14:50:52.346Z
// console.log(myDate.toString()) //output -> Fri Feb 09 2024 20:21:38 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()) //output -> Fri Feb 09 2024
// console.log(myDate.toTimeString()) //output -> 20:22:58 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleDateString()) //output -> 9/2/2024
// console.log(myDate.toISOString()) //output -> 2024-02-09T14:54:09.088Z
// console.log(myDate.toJSON()) //output -> 2024-02-09T14:54:38.053Z
// console.log(myDate.toLocaleString()) //output -> 9/2/2024, 8:25:21 pm


//We can create a date according to our need 
let myCreatedDate = new Date(2024, 0, 21) //Output -> Sun Jan 21 2024
//The months in javascript starts from zero(0), where 0 = january
console.log(myCreatedDate.toDateString())

//Similarly we can also add time in the above 
let myCreatedTime = new Date(2024, 0, 21, 5, 3)
console.log(myCreatedTime.toLocaleString()) //output -> 21/1/2024, 5:03:00 am

//We can also create synatax of date according to our prefrence
let dateSynatx1 = new Date("2024-01-21") //Here months starts from 1 i.e, jan
console.log(dateSynatx1.toLocaleString()) // 21/1/2024, 5:30:00 am

let dateSynatx2 = new Date("01-23-2024")
console.log(dateSynatx2.toLocaleString()) // 23/1/2024, 12:00:00 am


//Time stamp
let myTimeStamp = Date.now()
console.log(myTimeStamp) //1707495239132 this is in ms(milli seconds)

console.log(myCreatedDate.getTime())


//TO convert Date.now() in seconds
console.log(Math.floor(Date.now()/1000))

let newdate = new Date()

console.log(newdate.getMonth() + 1)
console.log(newdate.getDate())
console.log(newdate.getDay())
console.log(newdate.getTime())
console.log(newdate.getFullYear())


//Here we can define multiple parameters to get output according to our need
newdate.toLocaleString('default',{
    weekday: "long"
})
