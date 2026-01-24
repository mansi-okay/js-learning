const month = 3

switch (month) {
    case 1:
        console.log("Jan");    
        break;          // if not break then all cases run except default
    case 2:
        console.log("feb");    
        break;
    case 3:
        console.log("march");    
        break;         
    default:
        console.log("only 12 months are there");        
        break;
}