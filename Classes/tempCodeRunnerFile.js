class Kitchen{
    constructor(budget){
        this.budget = budget;
        this.productsInStock = {};
        this.actionsHistory = [];
        this.menu = {};
    }

    loadProducts(stringArr){
stringArr.forEach(line => {    
    let productArr = line.split(' ');    
    let price = productArr[productArr.length - 1];
    let quantity = productArr[productArr.length - 2];
    let name = productArr.slice(0, productArr.length - 2).join(' ');

    if(this.budget >= +price){             
        if(!this.productsInStock.hasOwnProperty(name)){
           this.productsInStock[name] = 0;
        }
        
        this.productsInStock[name] += +quantity;           
        
        this.budget -= +price;
        this.actionsHistory.push(`Successfully loaded ${quantity} ${name}`);

    } else{
        this.actionsHistory.push(`There was not enough money to load ${quantity} ${name}`);
    }
    

});
    return this.actionsHistory.join('\n');

    }

    addToMenu(meal, productsNeeded, price){
if(Object.keys(this.menu).includes(meal)){
    return `The ${meal} is already in our menu, try something different.`;
}
else{
    this.menu[meal] = {products : [], price: price};
    productsNeeded.forEach(line => {
        let currentProduct = line.split(' ');
        let quantity = currentProduct[currentProduct.length - 1];
        let productArr = currentProduct.slice(0, currentProduct.length - 1);  
        let name = productArr.join(' ');   
        
       if(Object.keys(this.menu[meal].products).includes(name)){
this.menu[meal].products[name] += +quantity;
        }
        else{
            let product = {};
        product[name]  = +quantity;
        this.menu[meal].products.push(product);
        }
        
   });
  
return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals on the menu, other ideas?`;
}
    }

    showTheMenu(){
        
        if(Object.keys(this.menu).length == 0){
            return 'Our menu is not ready yet, please come later...';
        }
        else{
            let result = '';
  Object.keys(this.menu).forEach(meal => result += (`${meal} - $ ${this.menu[meal].price}\n`));
  return result;
    }    
        }

    makeTheOrder(order){
        let meal = this.menu[order];
if(!meal){
    return `There is not ${order} yet in our menu, do you want to order something else?`;
}
else{
           let doWeHaveEveryProduct = true;
    meal.products.forEach(product => {
        let productName = Object.keys(product)[0];
       
if(!this.productsInStock.hasOwnProperty(productName) 
|| product[productName] > this.productsInStock[productName]){    
doWeHaveEveryProduct = false;
}
    });
if(doWeHaveEveryProduct){
  //  console.log(this.productsInStock);console.log(meal);
    meal.products.forEach(product => {
        let productName = Object.keys(product)[0];
        this.productsInStock[productName] -= product[productName];      

    })
    this.budget += meal.price;
//  console.log(this.productsInStock);
    
    return `Your order (${order}) will be completed in the next 30 minutes and will cost you ${meal.price}.`;
} else{
    return `For the time being, we cannot complete your order (${order}), we are very sorry...`;
}
}
    }
}