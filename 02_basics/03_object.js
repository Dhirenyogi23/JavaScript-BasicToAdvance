// singleton
// object.create

//----------------------------------------------------------------------


//object literals

const mysym = Symbol("keyOne");

const jsUser = {
    name: "Dhiren",
    "full name": "Dhiren Yogi",
   [mysym] : "keyOne",
    age : 23,
    location: "Banglore",
    email : "dhiren@google.com",
    isLoggedIn: true,
    lastLoginDays: ["friday", "saturday"]
}



// types of print the object.


console.log(jsUser.location);           
console.log(jsUser["location"]);
console.log(jsUser["full name"]);
console.log(typeof jsUser[mysym]);



// change the value of keys.


jsUser.email = "dhiren@microsoft.com";   
console.log(jsUser)

Object.freeze(jsUser);                  // when we freeze the object then it is not change.
jsUser.name = "sagar";
console.log(jsUser);



//-----------------------------------------------------------------------------------



jsUser.greeting = function(){
    console.log("hello javaScript users.");
}
jsUser.greetingTwo = function(){
    console.log(`hello javaScript users. my name is ${this.name}`);
}


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());