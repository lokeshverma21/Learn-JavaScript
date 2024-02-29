//The for-each loop does not return any value
// const arr = [1,2,3,4,5]
// const returned = arr.forEach( (item) => {
//     return item
// })
// console.log(returned) // Output -> undefined

// We use filter for this, filter is able to return value
const myNumbs = [1,2,3,4,5,6,7,8,9,10]
const newNumbs = myNumbs.filter( (item) => item > 5) 
//Here we use implicit return so we don't use 'return' statement here

const returned = myNumbs.filter( (item) => {
    return item > 5  //Here we used explicit{} return so we have to use the 'return' keyword 
})
console.log(returned)
// Output -> [ 6, 7, 8, 9, 10 ]


//
const books = [
    {title:"Book One", genre:"Science", publish:1992, edition:2018},
    {title:"Book Two", genre:"History", publish:1991, edition:2011},
    {title:"Book Three", genre:"Fiction", publish:1982, edition:2012},
    {title:"Book Four", genre:"Non-fiction", publish:1971, edition:2001},
    {title:"Book Five", genre:"Science", publish:1972, edition:2008},
    {title:"Book Six", genre:"History", publish:1952, edition:2018},
    {title:"Book seven", genre:"Fiction", publish:2000, edition:2019},
    {title:"Book Eight", genre:"Non-fiction", publish:2001, edition:2021},
    {title:"Book Nine", genre:"Fiction", publish:1992, edition:2012},
    {title:"Book Ten", genre:"Science", publish:1993, edition:2023},
]

const userBooks = books.filter( (bk) => bk.genre === 'History')

console.log(userBooks)
/*
[
  { title: 'Book Two', genre: 'History', publish: 1991, edition: 2011 },
  { title: 'Book Six', genre: 'History', publish: 1952, edition: 2018 }
]
*/