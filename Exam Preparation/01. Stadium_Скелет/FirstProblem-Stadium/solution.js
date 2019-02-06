function solve() {
    Array.from(document.getElementsByTagName('button'))
    .forEach((p) => p.addEventListener('click', getSeat));
    let fansCount = 0;
        let profit = 0;

    function getSeat(event){
        let button = event.target;
        
        if(button.textContent == 'Summary:'){

            let span = document.getElementById('summary').getElementsByTagName('span')[0];
            span.textContent = `${profit} leva, ${fansCount} fans.`;

        }else{
let prices = [10, 7, 5];
let vipPrices = [25, 15, 10];
let sectors = ['A', 'B', 'C'];
        


        let parent = button.parentNode;
        let index = parent.cellIndex;

       let sectionParent = parent.parentNode.parentNode.parentNode.parentNode;
       let ticketPrice;
       let section = sectionParent.className;
       if( section === 'VIP'){
ticketPrice = vipPrices[index];
       }
       else{
           ticketPrice = prices[index];
       }
    let message = '';
       if(button.style.backgroundColor === ''){
message = ` Seat ${button.textContent} in zone ${section} sector ${sectors[index]} was taken.`;
fansCount++;
profit+= ticketPrice;
button.style.backgroundColor = 'rgb(255,0,0)'; 
       } else{

        message = ` Seat ${button.textContent} in zone ${section} sector ${sectors[index]} is unavailable.`;
           
       }

let outputBox = document.getElementById('output');
let oldValue = outputBox.textContent;
outputBox.textContent = oldValue + message + "\n";
   
        
        }
    }
}