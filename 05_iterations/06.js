
//_____________________________________________________________________________



// const coding = ["javaScript", "php", "python", "java", "ruby", "cpp"]

// const values = coding.forEach( (item)=>{ 
//     console.log(item)
// } )

// console.log(values)       // it print undefined


//++++++++++++++++++++++++++++++++++++++++++++++++++++


// const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newnums = []

// myNum.forEach( (num)=>{
//     if(num >=5){
//         newnums.push(num)
//     }
// } )
// console.log(newnums)




//_______________________________________________________________________________



// filter    (it returns the new vlaue so we need to store in the new variables.)


// const myNum = [1,2,3,4,5,6,7,8,9,10]


// const newNums = myNum.filter( (num) => {
//     return num <=5
// } )
// console.log(newNums)


// const newNums = myNum.filter( (num)=> num >=5 )          
// console.log(newNums)





const books = [

    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2006 },
    {title: 'Book Three', genre: 'History', publish: 1995, edition: 2008 },
    {title: 'Book Four', genre: 'Science', publish: 1998, edition: 2010 },
    {title: 'Book Five', genre: 'Fiction', publish: 2000, edition: 2012 },
    {title: 'Book Six', genre: 'History', publish: 1985, edition: 2014 },
    {title: 'Book Seven', genre: 'Fiction', publish: 2002, edition: 2016 },
    {title: 'Book Eight', genre: 'Non-Fiction', publish: 2008, edition: 2018 },
    {title: 'Book Nine', genre: 'Science', publish: 2012, edition: 2020 },
    {title: 'Book Ten', genre: 'History', publish: 2006, edition: 2024 },

]



// using and


// const userBooks = books.filter( (book)=>{
//  return book.genre === "History" && book.publish === 1995
// } )


// using or


// const userBooks = books.filter( (book)=>{
//  return book.genre === "History" || book.publish === 1990
// } )



// const userBooks = books.filter( (book)=>{
//  return book.publish >= 2000 && book.publish <= 2010
// } )


// console.log(userBooks)


//_________________________________________________________________________