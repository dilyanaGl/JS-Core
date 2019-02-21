function solve(arr){
    let result = '';
  
   arr.forEach(line => { 
       
    if(result.length > 0){
        result += ' ';
    }
       let currentText = line; 
       //let isTextValid;
       let isInnerTextValid = false;
    while(isMatch(currentText)){

          let previousText = currentText.substring(0, currentText.indexOf('<'));
                let afterText = currentText.substring(currentText.lastIndexOf('>') + 1);
                let match = returnMatch(currentText);
                if(match[1] === match[3]){
                    currentText = previousText + match[2] + afterText; 
                    isInnerTextValid = true;
                } 
                else{
                    isTextValid = false;
                   
                    break;
                }
        }    
        if(isInnerTextValid){
            result += currentText;
        }
        
        
   });
   
   console.log(result);

   function isMatch(str){
       let regex = /(?<!<)<([a-z]+)>(.*)<\/([a-z]+)>(?!>)/;
       return regex.test(str);
   }

   function returnMatch(str){
       let regex = /(?<!<)<([a-z]+)>(.*)<\/([a-z]+)>(?!>)/;
       
       return regex.exec(str);
   }
  
}

solve(['<*>F</*>',
'<>F</>',
'<<a>F</a>',
'<a>F</a>']
);