const coding = ["python","js","java","cpp"]

// coding.forEach(function (value){
//     console.log(value);   
// })


// coding.forEach((value) => (console.log(value)))


function printMe(item){
    console.log(item);  
}
// coding.forEach(printMe)

coding.forEach((item,index,array) => {
    //console.log(index,item,array);
})



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageFileName);   
})