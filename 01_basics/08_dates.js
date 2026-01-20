let myDate = new Date()

//console.log(myDate);
// console.log(typeof myDate);

// console.log(myDate.toString()); //local date-time string with timezone, fixed format

// console.log(myDate.toISOString()); //UTC
// console.log(myDate.toJSON()); //internally calls toISOString

// console.log(myDate.toDateString()); 
// console.log(myDate.toLocaleString()); //format locale-dependent


// let date = new Date(2026, 0, 17)
// let date = new Date(2026, 0, 17, 13, 2)
// let date = new Date("2026-01-17")
let date = new Date("01-17-2026")
// console.log(date.toLocaleString())


let myTimeStamp = Date.now() // ms since Jan 1, 1970, 00:00:00 UTC
// console.log(myTimeStamp);
// console.log(date.getTime());  

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    month:"2-digit",
    timeZone: "Asia/Kolkata",
    hour:"2-digit"
}))

