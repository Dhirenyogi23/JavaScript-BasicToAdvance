
// const tinderUser = new Object()         // singleton object 
// const tinderUser = {}                   // non-singleton object



//-------------------------------------------------------

const tinderUser = {}

tinderUser.id = "123bc"
tinderUser.name = "sunny"
tinderUser.isLoggedIn = false

// console.log(tinderUser);                          // { id: '123bc', name: 'sunny', isLoggedIn: false }
// console.log(Object.keys(tinderUser));             // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));           // [ '123bc', 'sunny', false ]
// console.log(Object.entries(tinderUser));          // [ [ 'id', '123bc' ], [ 'name', 'sunny' ], [ 'isLoggedIn', false ] ]
// console.log(Object.hasOwnProperty('name'));       //  true


//-----------------------------------------------------------------------------------------------------------------


const  regularUser = {
    email : "some@google.com",
    fullName : {
        userFullName: {
        Fname: "Sam",
        Lname: "airee"
        }
    },

}


// console.log(regularUser.fullName.userFullName.Fname);              // sam



//-------------------------------------------------------------------------------


const obj1 = {1:"a", 2:"b", 3:"c"}
const obj2 = {4:"d", 5:"e", 6:"f"}


// many times use this syntax.

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

//---------------------------------

// less times use syntax

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);


//------------------------------------------------------------------------------------


const users = [
    {
        id: 1,
        email: "d@google.com"
    },
    {
        id: 2,
        email: "n@google.com"
    },
    {
        id: 3,
        email: "y@google.com"
    },
]

// console.log(users[1].email) 





//------------------------------------------------------------------------------------------------

// Object de-structure.

const course = {
    courseName: "JS in Nepali",
    courseInstructor: "Dhiren",
    price:1000
}

// console.log(course.courseName)                  // JS in Nepali

const {courseInstructor: Instructor} = course
console.log(Instructor)



//----------------------------------------------------------------------------------------

// json api


// types of json api

// {
//     "name": "dhiren",
//     "course": "javaScript",
//     "price": 1000
// }


// another types of json api 

// [
//     {},
//     {},
//     {}
// ]