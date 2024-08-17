
//________________________________________________________________


// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     setEmail(){
//         return `${this.email}@gmail.com`;   
//     }

//     setPassword(){
//         return `${this.password}12#$`
//     }
// }

// const chai = new User("Dhiren", "dhiren23", "pubg")
// console.log(chai)
// console.log(chai.setEmail())                             //  dhiren23@gmail.com
// console.log(chai.setPassword())                          //  pubg12#$



//____________________________________________________________________________


// Behind the scence.


function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.setEmail = function(){
    return `${this.email}@gmail.com`;
}

User.prototype.setPassword = function(){
    return `${this.password}XXX`
}


const tea = new User("tea", "tea12", "tea")
console.log(tea)
console.log(tea.setEmail())
console.log(tea.setPassword())