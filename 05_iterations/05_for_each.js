
//________________________________________________________________

// for each loop 

const coding = ["js", "python", "java", "ruby", "cpp"]


// use normal function

coding.forEach(function (item) {
    // console.log(item)
})


// using array function

coding.forEach((item) => {
    // console.log(item)
})


//____________________________________________



function printMe(items){
    // console.log(items)
}

coding.forEach(printMe)




//_____________________________________________________



coding.forEach((item, index, arr)=>{
    // console.log(item, index, arr)
})




//_________________________________________________________________________


// array inside object using for each loop. 


const myArray = [

    {
        languageName: "javaScript",
        fileName: "js"
    },

    {
        languageName: "python",
        fileName: "py"
    },

    {
        languageName: "java",
        fileName: "java"
    }

]


myArray.forEach((key) =>{
    console.log(`${key.languageName} =>  ${key.fileName}`)  
    // console.log(key.fileName)  
})