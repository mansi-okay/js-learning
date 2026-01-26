const requestUrl = 'https://api.github.com/users/mansi-okay'

const xhr = new XMLHttpRequest()

xhr.open('GET', requestUrl)

//overwritting onreadystatechange
xhr.onreadystatechange = function(){

    console.log(xhr.readyState);   
        
    if (this.readyState === 4){
        const data = this.responseText
        console.log(typeof data);  // the data comes in string from the api most of the times
        const dataInJSON = JSON.parse(data)  
        console.log(typeof dataInJSON);  
        console.log(dataInJSON.followers);           
    }
}

xhr.send()  //request starts (non-blocking)