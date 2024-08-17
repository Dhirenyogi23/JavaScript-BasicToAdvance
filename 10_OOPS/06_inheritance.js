
//_____________________________________________________________


class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`)
    }
}


class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`JS Course is Added by: ${this.username}`)
    }
}

const chai = new Teacher("Hitesh", "hitesh@gmail", "hitesh123")
console.log(chai)
chai.addCourse()
chai.logMe()



//__________________________________________________________________




