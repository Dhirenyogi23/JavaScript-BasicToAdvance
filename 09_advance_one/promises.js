
//__________________________________________________________________________

// first promise   (1st)

const promiseOne = new Promise(function(resolve, reject){
    // do async await task 
    // db call , cryptography, network
 
    setTimeout(function(){
        // console.log("Async task is completed")
        resolve()
        reject()
    }, 2000)
})


promiseOne.then(function(){
    // console.log("Promise consumed")
}).catch(function(){
    // console.log("error in promise")
})

//______________________________________________________________________


// second promise  (2nd)


new Promise(function(resolve, reject){
    setTimeout(function() {
        // console.log("async part 2")
        resolve()
        // reject()
    }, 2000);
}).then(function(){
    // console.log("async part 2 resolved")
}).catch(function(){
    // console.log("async part 2 error")
})


//_______________________________________________________________________


// third promise (3rd)


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Dhiren", email:"dhirenyogi23@gmail.com", age:23})
    }, 2000)
})

promiseThree.then(function(data){
    // console.log(data)
})



//________________________________________________________________


// fourth promise (4th)      (industry level syntax)
 

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"sulav", address:"Dhangadhi", age:22})
        }
        else{
            reject("Error: Something is error")
        }
    }, 2000)
})

promiseFour
.then( (data) => {
    // console.log(data)
    return data.username
} )
.then( (username) => {
    // console.log(username)
} )
.catch( (err) => {
    // console.log(err)
} )
.finally( ()=> {
    // console.log("The promise is Either resolved or rejected.")
} )



//_______________________________________________________________


// fifth promise  (5th)


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        error = false
        if(!error){
            resolve({username:"ganesh", pass: "1234", age:20})
        }
        else{
            reject("ERROR: you find a error in your code ")
        }
    }, 2000)
})


async function ConsumepromiseFive(){
    try{
        const response = await promiseFive
        // console.log(response)
    }
    catch(err){
        // console.log(err)
    }
    
}

ConsumepromiseFive();



//___________________________________________________________________


// sixth promise  (6th)


const promiseSix = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve()
        }
        else{
            reject("ERROR : Sorry!")
        }
    }, 2000)
})


async function getAllUsers() {

    try {
        const usersData =  await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await usersData.json()
        // console.log(data)
    } 
    catch (error) {
    //   console.log(error)  
    }
 
}

getAllUsers()




//______________________________________________________________________



// then and catch method 


fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json()
} )
.then( (data) => {
    console.log(data)
} )
.catch( (err) => {
    console.log(err)
} )



//_________________________________________________________________________
