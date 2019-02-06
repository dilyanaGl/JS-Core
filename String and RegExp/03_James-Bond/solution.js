function solve() {
  let arr = JSON.parse(document.getElementById('arr').value);
  let text = decode(arr);
 
function decode(arr){
 
  let key = arr[0];
  let parts = arr.splice(1);
 
  
  var keyPattern = new RegExp("^" + key + "$", 'gmi');
  let pattern = /^([A-Z#$%!]{8,})(\.|,)?$/;
let keyMatch;

for(let i = 0; i < parts.length; i++)
{
  let current = parts[i].split(" ");
  for(let i = 0; i < current.length; i++){
  if(keyPattern.test(current[i])){
    if(i < current.length){    
      if(pattern.test(current[i + 1])){
        current[i + 1] = decipher(current[i + 1]);
      }
    }
  }

  
}
parts[i] = current.join(" ");
}
return parts;


function decipher(word){
word = word.toLowerCase();

  let symbols = ['!', '%','#', '$'];
for(let i = 0; i < word.length; i++){
 if(symbols.includes(word[i])){
   word = word.replace(word[i], symbols.indexOf(word[i]) + 1);
 } 
}
return word;
}

}
for(let i = 0; i < text.length; i++){
  let resultBox = document.createElement('p');
resultBox.textContent = text[i];

document.getElementById('result').appendChild(resultBox);
}


function decipher(char){
if(/[A-Z]/.text(char)){
  return char.toLowerCase();
}

  let symbols = ['!', '$', '%', '#'];
  if(symbols.includes(char)){
    return symbols.indexOf(char) + 1;
  }
}
  
}

function decode(arr){
 
  let key = arr[0];
  let parts = arr.splice(1);
 
  
  var keyPattern = new RegExp("^" + key + "$", 'gmi');
  let pattern = /^([A-Z#$%!]{8,})(\.|,)?$/;
let keyMatch;

for(let i = 0; i < parts.length; i++)
{
  let current = parts[i].split(" ");
  for(let i = 0; i < current.length; i++){
  if(keyPattern.test(current[i])){
    if(i < current.length){    
      if(pattern.test(current[i + 1])){
        current[i + 1] = decipher(current[i + 1]);
      }
    }
  }

  
}
parts[i] = current.join(" ");
}

console.log(parts);

//document.getElementById('result').textContent = value;

function decipher(word){
word = word.toLowerCase();

  let symbols = ['!', '%','#', '$'];
for(let i = 0; i < word.length; i++){
 if(symbols.includes(word[i])){
   word = word.replace(word[i], symbols.indexOf(word[i]) + 1);
 } 
}
return word;
}

}

decode(["enCode", "Some messages are just not encoded what can you do?", "RE - ENCODE THEMNOW! - he said.", "Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%."]);