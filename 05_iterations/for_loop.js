// for

let array = [1,2,3,4,5,6]

for (let index = 0; index < array.length; index++) {
    const element = array[index]; 
    if (element == 5){
        // console.log("5 markup");
    }   
    // console.log(element);
}


for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
        // console.log(`j: ${j}, i: ${i}`);
        // console.log(i + " * " + j + " = " + i*j);  
    }    
}

// break and continue

//break stops the loop
// for (let index = 1; index <= 10; index++) {
//     if (index == 5) {
//         console.log(`5 detected`);
//         break
//     }
//     console.log(`i: ${index}`);   
// }

//continue skips to the next iteration
for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`5 detected`);
        continue
    }
    console.log(`i: ${index}`);   
}