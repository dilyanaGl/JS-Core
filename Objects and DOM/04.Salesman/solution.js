function solve() {

 let textAreas = document.getElementsByTagName('textArea');
 let products = [];
 let profit = 0;

 let buttons = document.getElementsByTagName('button');
 buttons[0].addEventListener('click', loadProduct);
 buttons[1].addEventListener('click', buyProduct);
 buttons[2].addEventListener('click', revise);


 function loadProduct(){
   let jsonInput = JSON.parse(textAreas[0].value);
   for (var index in jsonInput){

    let productsWithSameName = products.filter(p => p.name == jsonInput[index].name);
    if(productsWithSameName.length == 0){
      products.push(jsonInput[index]);  
      textAreas[2].value += 
    `Successfully added ${jsonInput[index].quantity} ${jsonInput[index].name}. Price: ${jsonInput[index].price}\n`;
     
    } else{
       productsWithSameName[0].quantity += jsonInput[index].quantity;
     productsWithSameName[0].price = jsonInput[index].price;
    }     

   }
  }

   function buyProduct(){
let order = JSON.parse(textAreas[1].value);
let productToBuy = products.filter(p => p.name == order.name)[0];
if(productToBuy && productToBuy.quantity >= order.quantity){  
     productToBuy.quantity -= order.quantity;
     profit+= (productToBuy.price * order.quantity);
     textAreas[2].value += `${order.quantity} ${productToBuy.name} sold for ${productToBuy.price * order.quantity}.\n`;
    // console.log(productToBuy.quantity);
  }
  else{
    textAreas[2].value += 'Cannot complete order.\n';
  }
} 

   function revise(){
buttons[0].removeEventListener('click', loadProduct);
buttons[1].removeEventListener('click', buyProduct);
buttons[2].removeEventListener('click', revise);

textAreas[2].value += `Profit: ${profit.toFixed(2)}.\n`;
   }
 
}