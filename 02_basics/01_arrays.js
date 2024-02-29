
//Declaration of arrays
const myArr = [0,1,2,3,4,5]
const myHeros = ["SpiderMan","IronMan"]
//Arrays has zero based indexing

//Another method of declaration
const myArr2 = new Array(1,2,3,4,5)

//Arrays methods

//This will add new element to array
myArr.push(6)
myArr.push(7)
console.log(myArr)

//This will remove the last element from the array
myArr.pop()
console.log(myArr)

//This will add a new element to the first position in the array
myArr.unshift(9)
console.log(myArr)

//This will remove the element from the first positon in the array
myArr.shift()
console.log(myArr)

//To know if some element is present in array or not
console.log(myArr.includes(9))

//To know the index of some element in a array
console.log(myArr.indexOf(9))
//returns (-1) if the element is not present in the array


const newArr = myArr.join()
//This Adds all the elements of an array into a string, and returns in the form of string

console.log(myArr)
console.log(newArr)

// slice, splice
console.log("A " , myArr)

const myn1 = myArr.slice(1,3) //slice gives the element based on the index passed, the last index is not included
//There will be no chnge in the original array

console.log(myn1)  //output -> [ 1, 2 ]
console.log("B " , myArr)

const myn2 = myArr.splice(1,3)//slice gives the element based on the index passed, the last index is also included
//This will change the original array also, original array will contain only elements that are not removed.
console.log(myn2)//[ 1, 2, 3 ]
console.log("C" , myArr)//C [ 0, 4, 5, 6 ]