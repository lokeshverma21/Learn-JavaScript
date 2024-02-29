const marvel_heros = ["Spiderman","Ironman","Hulk","Thor"]
const dc_heros = ["Superman","Batman","Falsh"]

marvel_heros.push(dc_heros)

//console.log(marvel_heros)
// ['Spiderman','Ironman','Hulk','Thor',[ 'Superman', 'Batman', 'Falsh' ]]
//The push statements had taken the second array itself as a complete array, but we want to merege the arrays as 
//one array

//To solve this we can use concat

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)
//['Spiderman','Ironman','Hulk','Thor',[ 'Superman', 'Batman', 'Falsh' ],'Superman','Batman','Falsh']


//To merege many arrays we actually use spread
const all_new_heros = [...all_heros, ...dc_heros]
console.log(all_new_heros)


//To split arrays inside arrays we use flat()
const oneArray = [1, 2, 3, [4, 5, 6], 7, 8, [9, 7, 9, [5, 7, 9, [8,9]]]];

const real_oneArray = oneArray.flat(Infinity);
console.log(real_oneArray);
/*[
    1, 2, 3, 4, 5, 6,
    7, 8, 9, 7, 9, 5,
    7, 9, 8, 9
  ]
*/

//To know if the data is a array or not
console.log(Array.isArray("Lokesh"))

//To convert this into an array
console.log(Array.from("Lokesh"))
//[ 'L', 'o', 'k', 'e', 's', 'h' ]

//Here we can also give object inside from and convert the object into an array


//To create a arrays from different set of variable or elements
let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1,score2,score3,score4))
//[ 100, 200, 300, 400 ]