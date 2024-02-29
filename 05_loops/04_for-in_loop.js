const myObject = {
    'js': 'JavaScript',
    'cpp': 'C++',
    'py': 'Python'
}

for (const key in myObject) {
    console.log(key)
}
/*
Output:
js
cpp
py

it return key
*/

for (const key in myObject) {
    console.log(`${key} : ${myObject[key]}`)
}
/*
Output:
js : JavaScript
cpp : C++
py : Python

We can access value by object[key]
*/


//Iterate Array by for-in
const programming = ["JavaScript","java","Python"]
for (const key in programming) {
    console.log(programming[key])
}
/*
Output:
JavaScript
java
Python
*/


//*****map is not iteratable through for-in loop */