const firstName = "Lokesh" //String declaration
const lastName = "Verma"
const age = 18

//console.log(firstName + lastName + age);

//A better method for concatination is to use backticks ( ` ` ), "string interpolation"
console.log(`My name is ${firstName} ${lastName} and my age is ${age}`)



//Another method to declare a string is :
const gameName = new String('fortnite')

/*
{
    0: 'f'
    1: 'o'
    2: 'r'
    3: 't'
    4: 'n'
    5: 'i'
    6: 't'
    7: 'e'
}
*/
//  Actually a string is a object and have multiple functions/methods that we can perform on them 
//  like .length, .touppercase(), .subString(), trim()

//  As we know that string is a key value pair or objects, so we can access its members by the key or index
console.log(gameName[0])

//To know the lenght of the string we can use ( .length )
console.log(gameName.length)

//TO convert a string into uppercase we can use ( .toUpperCase() )
console.log(gameName.toUpperCase())
/*The output will be "FORTNITE", 
    this will not change our actual string because strings uses STACK memory
    which gives copy of a variable when we need them or use them.
        (All primitive datatype uses Stack memory, so always a copy of variable is given whenever we use 
        them and there is no change in actuall vaiable or value)
*/



//To know the character present at any index we can use ( .charAt( index ))
console.log(gameName.charAt(6))

//To know the index of a character we can use ( .indexOf( 'character' ))
console.log(gameName.indexOf('t'))

//To get a part (substring) of a string we use ( .subString( startingIndex , endingIndex ))
console.log(gameName.substring(0,4))
//Here we can see that the last index 4th, is not included in the substring, it will only give "fort"

//For a substring we can also use Slice, in slice we can also use negative values so, that we can get a substring
//part from the last index. ( .slice(-7, 4))
console.log(gameName.slice(-7,4))

//To remove unwanted spaces from the string we can use trim ( .trim())
const newString = "   Lokesh    "
console.log(newString)
console.log(newString.trim())
//There is also trimStart and trinEnd methods that remove spaces from starting or end respectively, 
//Trim removes spaces from both starting and end


//To replace something with anything in a string we can use replace
// ( .replace( 'to be replaced' , 'to be replaced with' ))

let url = "https://lokesh.com/lokesh%20verma"
console.log(url.replace('%20', '-'))


//To know if somthing is present in String or not we can use includes ( includes('to be checked present or not' ))
let newUrl = "https://lokesh.com/lokesh%20verma1"
console.log(newUrl.includes('lokesh'))


//To split a string and get in a array on the basis of any symbol,digit or character we can use split
// ( .split('-'))
let studentName = "LokeshVerma-LV-com"
console.log(studentName.split('-'))