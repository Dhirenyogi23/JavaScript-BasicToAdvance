
//___________________________________________________________________________________________

const numbers = [1,2,3,4,5]


// first method. +++++++++++++++++++++++++++++++++


// const newNumbers = numbers.reduce( function(acc, currval) {
//     return acc + currval
// })
// console.log(newNumbers)


// second method. +++++++++++++++++++++++++++++++++++++


// const newNumbers = numbers.reduce( (acc, currentVal) =>{
    // console.log(`this is accumulator: ${acc}`)               // it shows the accumulator value 
    // console.log(`this is current value: ${currentVal}`)      // it shows the current value.
    // return acc + currentVal                                    // it returns the current value + accumulator value.
// },0 )

// console.log(newNumbers)                                      // it prints the final result.


// third method.++++++++++++++++++++++++++++++++++++++++++++++++ 


// const newNumbers = numbers.reduce( (acc, currVal) => acc+currVal ,0 )
// console.log(newNumbers)




//_________________________________________________________________________


const shoppingCart = [
    {
        mobilePhone: "realme",
        price: 20000
    },

    {
        smartWath: "realme",
        price: 1000
    },

    {
        Laptop: "Acer",
        price: 120000
    },

    {
        earpod: "Boat",
        price: 1500
    },
]

const TotalPrice = shoppingCart.reduce( (accumulator, item) => accumulator + item.price , 0 )

// console.log(`Your total price of shoppingCart is: ${TotalPrice}   Thank You.`)
