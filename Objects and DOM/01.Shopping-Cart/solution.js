function solve() {
   Array.from(document.getElementsByTagName('button')).forEach((p) => p.addEventListener('click', button));
let cartSum = 0;
let cartProducts = [];
   function button(event){
       let button = event.target;
       let buttonName = button.textContent;
let textArea = document.getElementsByTagName('textarea')[0];
let currentContent = textArea.value;

       if(buttonName === "Buy"){

textArea.textContent = currentContent + `You bought ${cartProducts.length == 0 ? '' : cartProducts.join(", ")} for ${cartSum.toFixed(2)}.\n`;
cartSum = 0;
cartProducts = [];
       }
       else{
let parent = button.parentNode;
let children = parent.getElementsByTagName('p');
let product = children[0].textContent;
let price = children[1].textContent.split(' ')[1];

cartSum += +price;
if(!cartProducts.includes(product)){
    cartProducts.push(product);
}

textArea.textContent = currentContent + `Added ${product} for ${price} to the cart.\n`;

       }
   }
}