
function myName() {
    console.log("D")
    console.log("H")
    console.log("I")
    console.log("R")
    console.log("E")
    console.log("N")
     
}

// myName;         // Reference
// myName();       // execution


//-----------------------------------------------


// function addTwoNumbers(a, b){
//     console.log(a + b)
// }

// addTwoNumbers(4,6)





// function addTwoNumbers(a, b){
//     return a + b;
// }

// const newNum = addTwoNumbers(5,5)
// console.log(newNum)



//--------------------------------------------------------------------



// function loginUserMessage(username) {
//     return `${username} just logged in the website.`
// }

// loginUserMessage("Dhiren")                       // empty print
// console.log(loginUserMessage("Dhiren"));         // Dhiren just logged in the website.




// using if else..


// function loginUserMessage(username) {

//     if(username === undefined){
//         console.log("Please enter the username")
//         return
//     }

//     else{
//         return `${username} just logged in the website.`

//     }

// }

// console.log(loginUserMessage());



//-------------------------------------------------------------------


// using default value in the function. it always print default value when we don't give the proper name.

// function loginUserMessage(username = "sam") {

//     if(username === undefined){
//         console.log("Please enter the username")
//         return
//     }

//     else{
//         return `${username} just logged in the website.`

//     }

// }

// console.log(loginUserMessage());




//------------------------------------------------------------------------------------------------


function calculateCartPrice(val1 , val2, ...num1) {
    return num1
}
// console.log(calculateCartPrice(200, 500, 1000, 5000, 30000))



//---------------------------------------------------------------------------------

// passing object in function

const user = {
    name: "Dhiren",
    age: 23
}

 function handleObj(anyUser){
    console.log(`hello my name is ${anyUser.name} and i am ${anyUser.age} years old.`)
}


// handleObj(user);

// handleObj({
//     name: "sam",
//     age: 25
// })



//-------------------------------------------------------------------------------------


// passing array in function

const myNewArr = ["hello", "Dhiren", "Yogi"];

function returnSecondVal(getArrVal) {
    return getArrVal[1]
}

// console.log(returnSecondVal(myNewArr))

// console.log(returnSecondVal(["hello", "Dhiren", "Yogi"]))