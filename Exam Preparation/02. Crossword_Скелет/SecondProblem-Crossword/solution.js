function solve() {
   Array.from(document.getElementsByTagName('button')).forEach(p => p.addEventListener('click', performOperation));
   let result = '';

   function performOperation(event){
      let button = event.target;
      let buttonName = button.textContent;
      let input = document.getElementById('input').value;
      

      switch(buttonName){
         case 'Filter':
         filter();
         break;
         case 'Sort':
          sort();
         break;
case 'Rotate':
 rotate();
break;
case 'Get':
 get();
break;

      }
      document.getElementById('output').getElementsByTagName('p')[0].textContent = result;
      document.getElementById('input').value = '';

      function get(){
let position = document.getElementById('getPosition').value;
if(position){
   result += input[--position];
}
      }

      function rotate(){
         let times = document.getElementById('rotateSecondaryCmd').value;
         let position = document.getElementById('rotatePosition').value;
         if(times && position){
            let arr = input.split('');
           for(let i = 0; i < +times % arr.length; i++){
              let temp = arr[arr.length - 1];
for(let j = arr.length - 1; j > 0; j--){
   arr[j] = arr[j - 1];
}
arr[0] = temp;

           }
result += arr[--position];
         }

         

         return result;
      }

      function sort(){
         let sortCriteria = Array.from(document.getElementById('sortSecondaryCmd').children)
         .filter(p => p.selected)[0];
         let position = document.getElementById('sortPosition').value;

         if(sortCriteria && position){
            switch(sortCriteria.value){
               case 'A':
               result += input.split('').sort()[--position];
               break;
               case 'Z':
               result += input.split('').sort().reverse()[--position];
               break;
         
            }

            return result;
         }
      }

      function filter(){
         let filterType = Array.from(document.getElementById('filterSecondaryCmd')
         .getElementsByTagName('option'))
         .filter(p => p.selected)[0];
         let filterPosition = document.getElementById('filterPosition').value;

         if(filterType && filterPosition){
            switch(filterType.value){
               case 'uppercase':
result += input.split('').filter(p => /[A-Z]/.test(p))[--filterPosition];
               break;
               case 'lowercase':
               result += input.split('').filter(p => /[a-z]/.test(p))[--filterPosition];
            break;
            case 'nums':
            result += input.split('').filter(p => /[0-9]/.test(p))[--filterPosition];
            }

            return result;
         }
      }
    
   }
}