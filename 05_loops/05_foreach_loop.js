const arr = ['js','python','java','swift']

arr.forEach( function (val) {
    console.log(val)
})
/*
Every time loop iterates the parameter 'val' will take one element from the array and we can use that variable
as per our need.

output:
js
python
java
swift
*/

arr.forEach( (item) => {
    console.log(item)
})
/*
output:
js
python
java
swift
*/


//We can also use external function in for each loop

function printMe(item){
    console.log(item)
}

arr.forEach(printMe)
//we just have to give referece of the function, don't execute that function (printme()❌)
/*
js
python
java
swift
*/


//Also the function inside forEach have multiple parameters like index, array (complete array)
arr.forEach( (item, index, arr) =>{
    console.log(item, index, arr)
})
/*
Output :
js 0 [ 'js', 'python', 'java', 'swift' ]
python 1 [ 'js', 'python', 'java', 'swift' ]
java 2 [ 'js', 'python', 'java', 'swift' ]
swift 3 [ 'js', 'python', 'java', 'swift' ]
*/

//Iterating through objects in the array
const coding = [
    {
        language : "javaScript",
        fileName : "js"
    },
    {
        language : "Python",
        fileName : "py"
    },
    {
        language : "Java",
        fileName : "java"
    },
]

coding.forEach( (item) =>{
    console.log(`${item.language} filename is : ${item.fileName}`);
} )

/*
Output:
javaScript filename is : js
Python filename is : py
Java filename is : java
*/