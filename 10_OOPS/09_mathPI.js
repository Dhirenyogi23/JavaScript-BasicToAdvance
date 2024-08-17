//  const PIvalue = Object.getOwnPropertyDescriptor(Math, "PI")
//  console.log(PIvalue)


// console.log(Math.PI)
// Math.PI = 23
// console.log(Math.PI)


//_____________________________________________________________



// const myNewObject = Object.create(null)         // method of creating object.



const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai is not ready yet")
    }
}

// const chaiName1  = Object.getOwnPropertyDescriptor(chai, "name")
// console.log(chaiName1)


Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
})

const chaiName  = Object.getOwnPropertyDescriptor(chai, "name")
console.log(chaiName)



// console.log(chai)




// loop object chai.


for (let [key, value] of Object.entries(chai)) {

    if(typeof value !== 'function'){

        console.log(`${key} : ${value}`)
    }

}