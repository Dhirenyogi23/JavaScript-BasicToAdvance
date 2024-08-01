// Primitive

/*  7 types : 

 String:
 let name = "dhiren"
 console.log(typeof name);   // string
 

 Number:
 let score = 23
 console.log(typeof score);   // number

 Boolean
 let isLoggedIn = true
 console.log(typeof isLoggedIn);   // boolean

 Null
 let WeatherForm = null
 console.log(typeof WeatherForm);  // object
 
 Undefined
 let scatterName;
 console.log(typeof scatterName);   // undefined


 Symbol
 const id = Symbol('123')
 const anotherId = Symbol('123')
 console.log(id === anotherId)   // false.
 console.log(typeof id);         // symbol


 BigInt
 let BigNumber = 67564323245346565n;
 let BigNum = BigInt(67564323245346565n);
 console.log(typeof BigNum);               // bigint.
 
 */




//--------------------------------------------------------------------------------



// Reference (Non-Primitive)

 /* 3 types : 

 // Array 
 const heros = ["suoerman", "batman", "spiderman"];
 console.log(typeof heros);  // object
 
 // Objects
 let myObj = {
    name: "Dhiren",
    age: 23,
    profession: "student"  
 }
 console.log(typeof myObj); 
 
 
 // Functions
 const myFunction =  function(){
   console.log("Hello World!")
 }
 console.log(typeof myFunction);
 
 

*/ 



/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


// Stack (Primitive)

// let MyYoutubeName = "DhirenyogiYtchannel";

// let anotherYoutubeName = MyYoutubeName;
// anotherYoutubeName = "secondYogiChannel"

// console.log(MyYoutubeName);
// console.log(anotherYoutubeName);



//-------------------------------------


// Heap (Non-Primitive)

// let userOne = {
//   userName : "Dhiren@googledotcom",
//   id :  "DY@ybl"
// }

// let userTwo = userOne;

// userTwo.userName = "yogi@googledotcom";

// console.log(userOne.userName);
// console.log(userTwo.userName)