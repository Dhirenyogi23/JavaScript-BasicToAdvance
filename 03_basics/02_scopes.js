


// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
    
// }


// console.log(a)   // a is not defined because let is block scope
// console.log(b)   // b is not defined because const is also a block scope
// console.log(c)   // c = 30 print because it is global scope.



//----------------------------------------------------------------------------------


// Nested Scope.


// function one() {
//     const username = "dhiren"

//     function two() {
//         const website = "youtube"
//         console.log(username);
//     }

//     // console.log(website);          // website is not defined because parent can't take properties of child

//     two();
// }

// one();


//---------------------------------------------------------------------------------



// if(true){
//     const username = "Dhiren"

//     if(true){
//         const website = " chai Aur Code"
//         console.log( username + website);      // it successsfully print : Dhiren chai Aur Code
//     }
    
    // console.log(website)                    // ReferenceError:  website is not defined

// }

// console.log(username)                       // ReferenceError:  username is not defined




// ++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++++++++



// console.log(addOne(5))                  // it print 6 

function addOne(num) {
    return num + 1;
}

//-------------------------------------------------------


// addTwo(5);                             // ReferenceError: Cannot access 'addTwo' before initialization

const addTwo =  function(num){
    return num + 2;
}



