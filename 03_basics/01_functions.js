
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