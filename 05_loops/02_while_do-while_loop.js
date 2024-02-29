//While loop
let i = 0
while (i <= 10) {
    console.log(i)
    i++
}
/*
Output:
0
1
2
3
4
5
6
7
8
9
10
*/

//Iteration on array using while loop
let myarr = ["SpiderMan","IronMan","Thor","Hulk"]
let index = 0

while (index < myarr.length) {
    const element = myarr[index]
    console.log(element)
    index++
}
/*
Output :
SpiderMan
IronMan
Thor
Hulk
*/


//do-while loop
let j = 0
do {
    console.log(j)
    j++
} while (j <= 10);

/*
Output :
0
1
2
3
4
5
6
7
8
9
10
*/