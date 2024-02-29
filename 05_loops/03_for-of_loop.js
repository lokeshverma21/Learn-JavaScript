//for of loop
const arr = [1,2,3,4,5]
for (const index of arr) {
    console.log(index)
}
/*
Output :
1
2
3
4
5
*/

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is : ${greet}`)
}
/*
Output
Each char is : H
Each char is : e
Each char is : l
Each char is : l
Each char is : o
Each char is :
Each char is : W
Each char is : o
Each char is : r
Each char is : l
Each char is : d
Each char is : !
*/


//Maps 
//maps always have unique values
//collection of key-value pairs
const map = new Map()
map.set('IN','India')
map.set('USA','United states of america')
map.set('Fr','France')

console.log(map)
/*
Output:
  'IN' => 'India',
  'USA' => 'United states of america',
  'Fr' => 'France'
}
*/

//for-of loop on map
for (const key of map) {
    console.log(key)
}
/*
output:
[ 'IN', 'India' ]
[ 'USA', 'United states of america' ]
[ 'Fr', 'France' ]
*/


//taking key and value of a map differently
for (const [key, value] of map) {
    console.log(key, ':', value)
}
/*
output:
IN : India
USA : United states of america
Fr : France
*/


//*********OBJECTS ARE NOT ITERATABLE WITH FOR-OF LOOP*************
