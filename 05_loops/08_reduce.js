//Reduce()
const myNums = [1,2,3,4]

const total = myNums.reduce( function(accumulater, currentValue) {
    console.log(`Accumalater : ${accumulater}, CurrentValue : ${currentValue}`)
    return accumulater + currentValue
},0)

console.log(total) 
/*Output :
Accumalater : 0, CurrentValue : 1
Accumalater : 1, CurrentValue : 2
Accumalater : 3, CurrentValue : 3
Accumalater : 6, CurrentValue : 4
10

*/


/*
At first the accumulater gets the intial value i.e '0' we passed at the end of the function &
the currentvalue get the first element of the array.

Then they both gets added and the result value goes inside the Accumulater
*/