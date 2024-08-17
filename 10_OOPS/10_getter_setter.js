class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }


    // for email


    get email(){
        return `${this._email}.np`
    }

    set email(emailVal){
        this._email = emailVal
    }


    // for password

    get password(){
        return this._password.toUpperCase()
    }

    set password(val){
        this._password = val
    }
}

const Dhiren = new User('d@dhiren.ai', 'dhiru')
console.log(Dhiren.email)
console.log(Dhiren.password)