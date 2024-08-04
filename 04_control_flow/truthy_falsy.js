

/* Truthy Value
            =>    "0",  'false',  true,  " ",  [],  {},  function(){}
*/


/* Falsy Value
           =>    null, undefined, NaN, false, BigInt, 0n,  0, -0, "", 
*/



// const Email = "d@yogi.ai"

// if(Email){
//     console.log("Got the user Email")
// }
// else{
//     console.log("Didn't get the user Email")
// }



//_________________________________________________________


// ++++++++++ for array +++++++++++++++++


// const userArray = []

// if(userArray.length === 0){
//     console.log("empty array");
// }
// else{
//     console.log("you have array")
// }



// ++++++++++++++++++  for Object ++++++++++++++++++++


// const userObj = {}

// if(Object.keys(userObj).length === 0){
//     console.log("empty object")
// }
// else{
//     console.log("you have object")
// }



//____________________________________________________________________________


// Nullish coalescing operator (??): null, undefined

let val1;

// val1 = 5 ?? 10                 // 5
// val1 = null ?? 15              // 15
// val1 = undefined ?? 20         // 20
// val1 = null ?? undefined       // undefined
// val1 = undefined ?? null       // null
// val1 = null ?? 50 ?? 100       // 50
// val1 = 20 ?? null ?? 10        // 20


// console.log(val1);


//_________________________________________________________________________


// Ternary Operator syntax =>    condition ? true : false


const IceCreamPrice = 120

IceCreamPrice >= 100 ? console.log("ice cream price is high") : console.log("ice cream price is low")

