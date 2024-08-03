const user = {
    username: "Dhiren",
    price: 499,

    welcomeMessage: function(){
        console.log(`${this.username} wlcome to my website.`)
        console.log(this)
    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)




//------------------------------------------------------------------------------


// function chai() {
//     const username = "sagar"
//     console.log(this.username)
// }

// chai()

//************************************ */

// const chai = function(){
//     const username = "satish"
//     console.log(this.username)
// }

// chai();

//*************************************** */

// const chai = ()=>{
//     const username = "likhit"
//   return  console.log(this.username)
// }

// chai();




//--------------------------------------------------------------------------------------------




// +++++++++++++++++  Arrow function  () => {}  ++++++++++++++++++++++++++++++++++++++++++++++



    // const sum = (num1, num2) => {
    //     return num1 + num2
    // }


    //*********************************************/


   // const sum = (num1, num2) => num1 + num2



   //**********************************************/


 //    const sum = (num1, num2) => (num1 + num2)



// console.log(sum(5, 4))



//******************************************/

// object in arrow function


// const someOne = () => ({username : "sandy"})

// console.log(someOne())







