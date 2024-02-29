//Basic syntax

//Printing 1 - 10
for (let i = 1; i <= 10; i++) {
    console.log(i) 
}
/**
 Output
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

//Nested Loop

for (let i = 0; i <5; i++) {
    console.log(`Outer loop value : ${i}`)

    for (let j = 0; j < 5; j++) {
        console.log(`Inner loop value : ${j}`)
    }
}
/*
Output

Outer loop value : 0
Inner loop value : 0
Inner loop value : 1
Inner loop value : 2
Inner loop value : 3
Inner loop value : 4
Outer loop value : 1
Inner loop value : 0
Inner loop value : 1
Inner loop value : 2
Inner loop value : 3
Inner loop value : 4
Outer loop value : 2
Inner loop value : 0
Inner loop value : 1
Inner loop value : 2
Inner loop value : 3
Inner loop value : 4
Outer loop value : 3
Inner loop value : 0
Inner loop value : 1
Inner loop value : 2
Inner loop value : 3
Inner loop value : 4
Outer loop value : 4
Inner loop value : 0
Inner loop value : 1
Inner loop value : 2
Inner loop value : 3
Inner loop value : 4
*/

//Iteration on array with loop

let arr = ["Spiderman","Ironman","Thor","Hulk"]

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element)
}
/*
Output :
Spiderman
Ironman
Thor
Hulk
*/



//Break statement
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log(`5 Detected`)
        break;
    }
    console.log(i)
}
/*Output
0
1
2
3
4
5 Detected
*/


//Continue statement
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log(`5 Detected`)
        continue;
    }
    console.log(i)
}

/*Output
0
1
2
3
4
    5 Detected //Here it skips the value 5
6
7
8
9
10
*/