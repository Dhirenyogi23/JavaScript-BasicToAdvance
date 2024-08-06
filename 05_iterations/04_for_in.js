
//_____________________________________________________________________________


// for in loop using in object

const language = {
    js: "javaScript",
    cpp: "c++",
    py: "python",
    ry: "ruby"
}

// console.log(language)


for (const key in language) {
    // console.log(`${key} is the shortcut of ${language[key]}`)
}



//_________________________________________________________________________________

// for in loop using in array.


const programming = ["javaScript", "python", "cSharp", "java"]

// console.log(programming)

for(const key in programming){
    // console.log(programming[key])
}



//_______________________________________________________________________________________


// for in loop using in map.  (it is not iteratable. )


const map = new Map()
map.set('NEP', 'Nepal')
map.set('IND', 'India')
map.set('PAK', 'Pakistan')
map.set('USA', 'United states of america')


// console.log(map)

for(const key in map){
    // console.log(map[key])
}


