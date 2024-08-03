
// if


//    >, <, >=, <=, ==, !=, ===


// const tempreture = 51

// if(tempreture > 50){
//     console.log("Tempreture is High");
// }
// else{
//     console.log("Tempreture is Low");
// }



//________________________________________________________________________


// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`user power : ${power}`)   // user power : fly
// }

// console.log(`user power : ${power}`);      // ReferenceError: power is not defined 



//_____________________________________________________________


const userLoggedIn = true
const debitCard = true

const userLoggedFromEmail = false
const userLoggedFromGoogle = true


if(userLoggedIn && debitCard){
    console.log("Allow to buy courses")
}

if(userLoggedFromEmail || userLoggedFromGoogle){
    console.log("User Logged In")
}

