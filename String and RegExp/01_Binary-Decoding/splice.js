function binary(str){

    let sum = getSum();
    function getSum(){
        let sum = 0;
     for(let i = 0; i < str.length; i++){
     if(str[i] == 1){
       sum += 1;
     }
     } 
     let numSum = 0;
     do{
         if(sum === 0)
         {
             sum = numSum;
             numSum = 0;
         }         
          while(sum > 0){
     numSum += (sum % 10);
     sum = Math.floor(sum / 10);
     }
     
    }while(Math.floor(numSum / 10) > 0);
    
    return numSum;
}     
     str = str.substring(sum, str.length - sum);
     let text = '';
     let count = Math.ceil(str.length / 8);
     for(let i = 0; i < count; i++){
       let binaryNum = str.substring(0, 8).toString(2);
     let num = parseInt(binaryNum, 2);
     text += String.fromCharCode(num);
     if(str.length > 8)
     {
       str = str.substring(8);
     }  
     }

     console.log(text);
}


binary('010011100110110111101100110011101000111010101101110011010010010000001110011011101000111010101100100011001010110111001110100010');