function solve() {
  let keyWordElement = document.getElementById('str');
  let symbol = keyWordElement.value;
let textElement = document.getElementById('text');
let str = textElement.value;
let startIndex = str.search(symbol);
let endIndex = str.lastIndexOf(symbol); 
let message = str.substring(startIndex + symbol.length, endIndex);

let pattern = /(east|north).*?(\d{2})[^,]*?(,)[^,0-9]*?(\d{6})/ig;

let eastMatch = '';
let northMatch= '';
let match;
while(match = pattern.exec(str)){
    if(match[1].toLowerCase() == 'east'){
        eastMatch = `${match[2]}.${match[4]}`;
    }
    else{
        northMatch = `${match[2]}.${match[4]}`;
    }
}

let resultBox = document.getElementById('result');
let northChild = document.createElement('p');
northChild.textContent = `${northMatch} N`;
let eastChild = document.createElement('p');
eastChild.textContent = `${eastMatch} E`;
let messageBox = document.createElement('p');
messageBox.textContent = `Message: ${message}`;

resultBox.appendChild(northChild);
resultBox.appendChild(eastChild);
resultBox.appendChild(messageBox);

//console.log(`${northMatch} N`);
//console.log(`${eastMatch} E`);
//console.log();

}

