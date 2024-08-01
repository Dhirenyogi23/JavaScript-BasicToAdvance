
// const superHero = ["thor", "ironman", "spiderman"]
// const dcHero = ["superman", "flask", "batman"]

// superHero.push(dcHero);
// console.log(superHero);            // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flask', 'batman' ] ]
// console.log(superHero[3][2])       // batman


// let allHeroes = superHero.concat(dcHero)
// console.log(allHeroes);                      // [ 'thor', 'ironman', 'spiderman', 'superman', 'flask', 'batman' ]


// const allHero = [...superHero, ...dcHero];
// console.log(allHero);                        // [ 'thor', 'ironman', 'spiderman', 'superman', 'flask', 'batman' ]



//------------------------------------------------------------------------------------------------------------------


// const anotherArray = [1,2,3,4,[4,5,6,[6,7,[8,9,4,5]]]];
// const anotherRealArray = anotherArray.flat(Infinity);
// console.log(anotherRealArray);                           //  [  1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9, 4, 5]



//------------------------------------------------------------------------------------------------------



// console.log(Array.isArray("Dhiren"));                     // false
// console.log(Array.from("Dhiren"));                        // [ 'D', 'h', 'i', 'r', 'e', 'n' ]
// console.log(Array.from({name: "Dhiren"}))                 // []   interesting for interview purpose.



// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));                //   [ 100, 200, 300 ]