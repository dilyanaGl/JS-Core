function decodeMessage(symbol, str){
let startIndex = str.search(symbol);
let endIndex = str.lastIndexOf(symbol); 
let message = str.substring(startIndex + symbol.length, endIndex);

let pattern = /(east|north).*?(\d{2})[^,]*?(,)[^,0-9]*?(\d{6})/ig;

let eastMatch = '';
let northMatch= '';
let match;
while(match = pattern.exec(str)){
    if(match[1].toLowerCase() == 'east'){
        eastMatch = `${match[2]},${match[4]}`;
    }
    else{
        northMatch = `${match[2]},${match[4]}`;
    }
}

console.log(`${northMatch} N`);
console.log(`${eastMatch} E`);
console.log(`Message: ${message}`);
}

decodeMessage('4ds', 'eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532');