/*
A variable in javascript can be declared by three methods i.e, let, const and var.

-> const is used for constant values for variables that cannot be changed afte declaration.
-> let & var are used to simply declare a variable and there values can be changed after declaration.

*/

const accountId = 144990;
let accountEmail = "abc@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";//This type of declaration is not recommende but in javascript variables can declared simply like this.

//accountId = 222222; //This is not allowed, baecause constants cannot be changed.

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity]);
//With console.table we can print multiple values on console or terminal.