
function User(email, password){
    this._email = email;
    this._password = password;


   // getter or setter in function fot email

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },

        set:function(value){
            this._email = value
        }
    })



    
   // getter or setter in function fot password

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password ='**********'
        },
        set: function(value){
            this._password = value
        }
    })

}

  const chai = new User("dhiren@gmail.com", "sona12")
  console.log(chai.password)