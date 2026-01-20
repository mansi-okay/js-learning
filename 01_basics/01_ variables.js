const accountID = 12234
let accountEmail = "mansi@gmail.com"
var accountPassword = "Ok@y"
accountCity = "Jaipur"
let accountState

// accountID = 12235   //const reassignment not allowed cuz constant
accountEmail = "mansiagrawat@gmail.com"
accountPassword = "Ok@y0k@y"
accountCity = "Jodhpur"

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])

/* 
Prefer not to use var
because it is function scoped

let and const are block scoped
*/