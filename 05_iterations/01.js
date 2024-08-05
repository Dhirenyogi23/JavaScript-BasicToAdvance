
// for


for (let i = 0; i <= 10; i++) {
    if(i == 5){
        // console.log("5 is the best number");
    }
    // console.log(i)
}


//______________________________________________________________________________


for(let i=10; i<=100; i= i+10){

    // console.log(`Count Table of :  ${i}`)

    for(let j=1; j<=10; j++){

        // console.log(`${j}`)
        // console.log( i + ' * ' + j + ' = ' + i*j)
    }
}



//__________________________________________________________________________________


const myArray = ["flask", "batman", "superman"]
    // console.log(myArray.length)

for( let i = 0; i < myArray.length; i++){
    // console.log(myArray[i])
}



//______________________________________________________________________________________


// for Break


for( let i = 1; i<=20; i++){

    if( i == 5){
        // console.log(`The number we want is detected: ${i}`)
        break
    }
    // console.log(`the value of index is: ${i}`)
}



// for Continue


for( let i = 1; i<=20; i++){

    if( i == 10){
        // console.log(`Number Detected ${i}`)
        continue;
    }
    // console.log(`The value of index is: ${i}`)
}