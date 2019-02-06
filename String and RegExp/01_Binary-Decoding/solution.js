function solve() {
  let element = document.getElementById('str');
 let str = element.value;
 let sum = getSum();

 function getSum(){

    let sum = str;
    while(sum.length > 1){
            sum = sum
     .split('')
     .reduce((a, b) => +a + +b)
     .toString();
    }
    return Number(sum);  
 
}     
  str = str.substring(sum, str.length - sum);

  let pattern = /[A-Za-z ]+/;
  let text = str.split(/([\d]{8})/)
  .filter((p) => p)
  .map((p) => binaryToString(p))   
 .filter((p) => pattern.test(p)) 
  .join('');


  

  function binaryToString(binary){
      let num = parseInt(binary, 2);
      return String.fromCharCode(num);
  }
  

document.getElementById('result').textContent = text;
}



