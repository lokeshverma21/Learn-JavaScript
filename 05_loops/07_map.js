const nums = [1,2,3,4,5,6,7,8,9,10]
//adding 10 in every element of the array

//map also returns a value itself
const newNums = nums.map( (num) => num+10)
console.log(newNums)
/*
Output:
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/

//Chaining -> Using multiple methods on a vairable 
// Example -> const newNumbers = nums.map().map().filter()

const newNumbers = nums
                    .map( (num) => num * 10)
                    .map( (num) => num + 1)
                    .filter( (num) => num > 40)

console.log(newNumbers)
/*
Output:
[
  41, 51,  61, 71,
  81, 91, 101
]
*/









