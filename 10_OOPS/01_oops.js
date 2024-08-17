

//___________________________________________________________________


// object


const user = {
    username: "Dhiren",
    loggedIn: true,
    email: "dhiren@google.com",

    getUserDetail: function(){
        console.log("got the username database.")
        console.log(`username: ${this.username}`)
        console.log(this)
    }
}


// console.log(user.username)
// console.log(user["username"])

// user.getUserDetail();



//______________________________________________________________________



// constructor


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne = new User("chaiAurCode", 23, true)
const userTwo = new User("Dhiren", 50, false)

// console.log(userOne);
// console.log(userTwo);



//___________________________________________________________


  




