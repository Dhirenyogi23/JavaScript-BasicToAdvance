let myName = "Dhiren      "
let address = "Dhangadhi      "

// console.log(myName.truelength)         // this is wrong.  it print undefined



const anotherUsername = "Dhirendra   "

String.prototype.trueLength = function(){
    console.log(`total string length is ${this.length}`)
    console.log(`true length is : ${this.trim().length}`)
}


// anotherUsername.trueLength()
// "   hitesh".trueLength()
// "saimoon   ".trueLength()


//    myName.trueLength()
//    address.trueLength()

//____________________________________________________________________

// this is for object.


// let myString = "Dhirendra"                     // this is string

// let myHeroes = ["thor", "spiderman"]          // this is array

// let heroPower = {                             // this is object
//     thor: "hammer",
//     spiderman: "sticky",

//     getSpiderPower: function(){
//         console.log(`spider power is ${this.spiderman}`)
//     }
// }

// Object.prototype.dhiren = function(){
//     console.log(`Dhiren is present in all object. ${myString}`)
// }



// heroPower.dhiren()          // object
// myHeroes.dhiren()           // array
// myString.dhiren()           //string




//__________________________________________________________________

// this is for array.


// let myString = "Dhirendra"                     // this is string

// let myHeroes = ["thor", "spiderman"]          // this is array

// let heroPower = {                             // this is object
//     thor: "hammer",
//     spiderman: "sticky",

//     getSpiderPower: function(){
//         console.log(`spider power is ${this.spiderman}`)
//     }
// }

// Array.prototype.dhiren = function(){
//     console.log(`Dhiren is present in all object.`)
// }



// myHeroes.dhiren()           // array        // this is right.

// heroPower.dhiren()          // object       //TypeError: heroPower.dhiren is not a function 
// myString.dhiren()           //string       //TypeError: myString.dhiren is not a function



//_____________________________________________________________________


// this is for string


// let myString = "Dhirendra"                     // this is string

// let myHeroes = ["thor", "spiderman"]          // this is array

// let heroPower = {                             // this is object
//     thor: "hammer",
//     spiderman: "sticky",

//     getSpiderPower: function(){
//         console.log(`spider power is ${this.spiderman}`)
//     }
// }

// String.prototype.dhiren = function(){
//     console.log(`Dhiren is present in all object. ${myString}`)
// }



// myString.dhiren()           //string       // this is right.

// heroPower.dhiren()          // object     // TypeError: heroPower.dhiren is not a function
// myHeroes.dhiren()           // array      // TypeError: myHeroes.dhiren is not a function


//_______________________________________________________________________



// Inheritance


let TeacherInformation = {
    name: "Dhiren",
    email: "dhiren@google.com"
}

let TeacherWork = {
    makeVideo: true
}


let TeachingSupport = {
    isAvailable: false
}

let TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,

    __proto__:TeachingSupport
}


// this is old method    (+++++++++++++++++++++++)



// console.log(TASupport.isAvailable)

// TeacherWork.__proto__ = TeacherInformation
// console.log(TeacherWork.name)



// this is new method     (++++++++++++++++++++++++++++)


// Object.setPrototypeOf(TeacherWork, TeacherInformation)
// console.log(TeacherWork.email)



//____________________________________________________________________