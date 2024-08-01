
//+++++++++++++++++++++++++ Arrays +++++++++++++++++++++++++++++++++++++++++

// Array Reference:-    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array



// const myArr = [1, 2, 3, 4, 5];
// console.log(myArr);

// const heroes = ["Shaktiman", "superman", "batman"];
// console.log(heroes);

// const myArr2 = new Array(1,2,3,4,5,6,7,8,9);
// console.log(myArr2);



//+++++++++++++++++++++++++ Arrays Methods +++++++++++++++++++++++++++++++++++++++++



// const myArr = [1,2,3,4,5];

//  myArr.push(6);
//  console.log(myArr);                  // it added the number in last  [ 1, 2, 3, 4, 5, 6 ]

//  myArr.pop()
//  console.log(myArr);                  // it remove the number from last   [ 1, 2, 3, 4 ]

// myArr.unshift(0);
// console.log(myArr);                   //  it added the number in first  [ 0, 1, 2, 3, 4, 5 ]

// myArr.shift();
// console.log(myArr);                   // it removes the number from first  [ 2, 3, 4, 5 ]

// console.log(myArr.includes(4));       // it print true because number 4 is available in the array.
// console.log(myArr.includes(9));       // it print false because number 9 is not available in the array.

// console.log(myArr.indexOf(1))         // number 1 is in  0 index so it print 0.
// console.log(myArr.indexOf(8))         // number 8 is not available in the array so it prints -1.


// const newArr = myArr.join()
// console.log(newArr);                  // 1,2,3,4,5
// console.log(typeof newArr);           // string



//+++++++++++++++++++++++++++++  slice and splice method. ++++++++++++++++++++++++++++++++++++++



// const myan = [0,1,2,3,4,5];

// console.log("a", myan);                 // a [ 0, 1, 2, 3, 4, 5 ]

// const myan1 = myan.slice(0, 3);
// console.log(myan1);                     //  [ 0, 1, 2 ]

// console.log("B", myan);                //   B [ 0, 1, 2, 3, 4, 5 ]

// const myan2 = myan.splice(0, 3);
// console.log(myan2);                   //  [ 0, 1, 2 ]
// console.log("c", myan);               //  c [ 3, 4, 5 ]


