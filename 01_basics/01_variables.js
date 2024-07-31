const accountId = 232323
let accountEmail = "dhiren@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;


// accountId = 5   // not allowed.
console.log(accountId);

accountEmail = "gcgc@gmail.com"
accountPassword = "212121"
accountCity = "Bangluru"


/*
Prefer not to use var
Because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
