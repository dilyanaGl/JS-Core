function solve() {
let buttons = document.getElementsByTagName('button');
buttons[0].addEventListener('click', makeFurniture);
buttons[1].addEventListener('click', buyFurniture);

 function makeFurniture(event){
    let input = JSON.parse(document.querySelector('textarea').value);

    for(let obj in input){
      //let currentObj = input[obj];
      let furnitureObject = input[obj];
let div = document.createElement('div');
div.setAttribute('class', 'furniture');
let nameElement = document.createElement('p');
nameElement.textContent = `Name: ${furnitureObject["name"]}`;
let priceElement = document.createElement('p');
priceElement.textContent = `Price: ${furnitureObject["price"]}`;
let imgBox = document.createElement('img');
imgBox.setAttribute('src', furnitureObject["img"]);
let decorationFactor = document.createElement('p');
decorationFactor.textContent = `Decoration factor: ${furnitureObject.decFactor}`;
let checkBox = document.createElement('input');
checkBox.setAttribute('type', 'checkBox');

div.appendChild(nameElement);
div.appendChild(imgBox);
div.appendChild(priceElement);
div.appendChild(decorationFactor);
div.appendChild(checkBox);
document.getElementById('furniture-list').appendChild(div);

    }
  }
  function buyFurniture()
  {
let totalPrice = 0;
let averageFactor = 0;
let currentProducts = [];
let checkedFurniture = Array.from(document.getElementsByClassName('furniture'));
let checkedCount = 0;
for(let i = 0; i < checkedFurniture.length; i++){
  if(checkedFurniture[i].getElementsByTagName('input')[0].checked){

    let children = checkedFurniture[i].getElementsByTagName('p');
    //let child = children[0];
totalPrice += +children[1].textContent.split(': ')[1];
averageFactor += +children[2].textContent.split(': ')[1];
currentProducts.push(children[0].textContent.split(': ')[1]);
checkedCount++;
  }

 // if(document.getElementById('furniture-list').children.length == checkedCount){
   // buttons[1].removeEventListener('click', buyFurniture);
  //}
 
} 
document.querySelectorAll('textarea')[1].value += 
`Bought furniture: ${currentProducts.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${(+averageFactor / +checkedCount)}`;
//bugger;
   
 }
}

