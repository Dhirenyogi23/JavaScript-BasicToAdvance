
//__________________________________________________________________

// for..of  loop

// ["", "", ""]
// [{}, {}, {}]



// for of loop used in array 


const array = [1,2,3,4,5]

for(const arr of array){
    // console.log(arr)
}



const greeting = "hello world!"

for(const greet of greeting){
    if(greet === ' '){
        continue
    }
    // console.log(greet);
}



//____________________________________________________________________


// for of loop used in map.

// map

const map = new Map()
map.set('NEP', 'Nepal')
map.set('IND', 'India')
map.set('PAK', 'Pakistan')
map.set('USA', 'United states of america')

// console.log(map);


for(const [key, value] of map){
    // console.log(`key : ${key}  value : ${value}`)
}



//_______________________________________________________


// for of loop used in object.

const myObj = {
    game1: 'BFS',
    game2: 'PUBG',
    game3: 'COC',
    game4: 'ROC',
    game5: 'CLN',
    game6: 'PAN'
}

// console.log(myObj)

// for(const [key, value] of myObj){
//     console.log(`key : ${key}  val: ${value}`)
// }





