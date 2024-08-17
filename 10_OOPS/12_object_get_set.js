const User = {
    _email: 'd@dc.com',
    _password: "ajax12",

    

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    },



    get password(){
        return this._password = 'your password is : *******'
    },

    set password(value){
        this._password = value
    }
    
}

const tea = Object.create(User)
console.log(tea.email)
console.log(tea.password)