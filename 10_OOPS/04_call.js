function setUsername(username){
    this.username = username
    console.log("setusername function execution context")
}

function createUsername(username, email, password){
    setUsername.call(this, username)
    
    this.email = email
    this.password = password
}

const chai = new createUsername("dhiren", "dhiren@fb.com", "dhiren23")
console.log(chai)