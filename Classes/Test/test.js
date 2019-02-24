const assert = require('chai').assert;
const expect = require('chai').expect;
class Warehouse {

    get capacity() {
        return this._capacity;
    }

    set capacity(givenSpace) {

        if (typeof givenSpace === 'number' && givenSpace > 0) {
            return this._capacity = givenSpace;
        } else {
            throw `Invalid given warehouse space`;
        }
    }

    constructor(capacity) {
        this.capacity = capacity;
        this.availableProducts = {'Food': {}, 'Drink': {}};
    }

    addProduct(type, product, quantity) {

        let addedQuantity = ((this.capacity - this.occupiedCapacity()) - quantity);
        let output;

        if (addedQuantity >= 0) {

            if (this.availableProducts[type].hasOwnProperty(product) === false) {
                this.availableProducts[type][product] = 0;
            }

            this.availableProducts[type][product] += quantity;
            output = this.availableProducts[type];

        } else {
            throw `There is not enough space or the warehouse is already full`;
        }

        return output;
    }

    orderProducts(type) {

        let output;
        let sortedKeys = Object.keys(this.availableProducts[type])
            .sort((a, b) => this.availableProducts[type][b] - this.availableProducts[type][a]);

        let newObj = {};

        for (let product of sortedKeys) {

            if (newObj.hasOwnProperty(product) === false) {
                newObj[product] = 0;
            }

            newObj[product] += this.availableProducts[type][product];
        }

        this.availableProducts[type] = newObj;
        output = this.availableProducts[type];

        return output;
    }

    occupiedCapacity() {

        let output = 0;
        let productsCount = Object.keys(this.availableProducts['Food']).length +
            Object.keys(this.availableProducts['Drink']).length;

        if (productsCount > 0) {

            let quantityInStock = 0;

            for (let type of Object.keys(this.availableProducts)) {

                for (let product of Object.keys(this.availableProducts[type])) {

                    quantityInStock += this.availableProducts[type][product];
                }
            }

            output = quantityInStock;
        }

        return output;
    }

    revision() {

        let output = "";

        if (this.occupiedCapacity() > 0) {

            for (let type of Object.keys(this.availableProducts)) {
                output += `Product type - [${type}]\n`;
                for (let product of Object.keys(this.availableProducts[type])) {
                    output += `- ${product} ${this.availableProducts[type][product]}\n`;
                }
            }
        } else {
            output = 'The warehouse is empty';
        }

        return output.trim();
    }

    scrapeAProduct(product, quantity) {

        let type = Object.keys(this.availableProducts).find(t =>          Object.keys(this.availableProducts[t]).includes(product));
        let output;

        if (type !== undefined) {

            if (quantity <= this.availableProducts[type][product]) {
                this.availableProducts[type][product] -= quantity;
            } else {
                this.availableProducts[type][product] = 0;
            }

            output = this.availableProducts[type];

        } else {
            throw `${product} do not exists`;
        }

        return output;
    }
}

describe('warehouse', function(){

describe('constructor with incorrect values', function(){
it('incorrect capacity should throw exception', function(){
let stringCapacity = '2';
let objectCapacity = {capacity:2};
let arrayCapacity = [2];
let negativeCapacity = -2;
     expect(function () {
         let warehouse = new Warehouse(stringCapacity);
     }).to.throw('Invalid given warehouse space');
     expect(function () {
         let warehouse = new Warehouse(objectCapacity);
     }).to.throw('Invalid given warehouse space');
      expect(function () {
         let warehouse = new Warehouse(arrayCapacity);
     }).to.throw('Invalid given warehouse space');
      expect(function () {
         let warehouse = new Warehouse(negativeCapacity);
     }).to.throw('Invalid given warehouse space');
})
})

describe('constructor', function(){
    let warehouse;
    let capacity = 5;
        beforeEach(function(){
    warehouse = new Warehouse(capacity);
    });
    it('Warehouse should be instantiated correctly', function(){
assert.equal(warehouse.capacity, capacity);
assert.instanceOf(warehouse, Warehouse, 'Object must be an instance of Warehouse');
assert.hasAllKeys(warehouse.availableProducts, ['Food', 'Drink']);
assert.property(warehouse, 'availableProducts', 'Nested property is not initialized');
assert.deepPropertyVal(warehouse, 'availableProducts', {'Food': {}, 'Drink': {}}, 'Available products is not initialized correctly');

})
})


describe('get capacity', function(){
    let warehouse;
let capacity = 5;
    beforeEach(function(){
warehouse = new Warehouse(capacity);
})

it('get method should return correct capacity', function(){
assert.equal(warehouse.capacity, capacity, 'Get method did not return correct capacity');
})

})

describe('addProduct', function(){

    let warehouse;
    let capacity = 5;
        beforeEach(function(){
    warehouse = new Warehouse(capacity);
    })

    it('Single product should be inserted correctly', function(){
let result = warehouse.addProduct('Food', 'Apple', 2);
expect(result).to.deep.equal({'Apple' : 2}, 'AddProduct did not return the correct result');
assert.nestedPropertyVal(warehouse, 'availableProducts.Food.Apple', 2, 'Available products does not store correct values');

    });

it('Capacity overload should throw an exception', function(){
expect(function(){warehouse.addProduct('Food', 'Apple', 6)}).to.throw('There is not enough space or the warehouse is already full');
})

it('adding many products should work correctly', function(){
let result1 = warehouse.addProduct('Drink', 'coffee', 1);
let result2 = warehouse.addProduct('Drink', 'tea', 2);

expect(result2).to.deep.equal({'coffee' : 1, 'tea' : 2}, 'Object was not added correctly');
assert.nestedPropertyVal(warehouse, 'availableProducts.Drink.coffee', 1, 'Available Products.Drinks does not have correct value');
assert.nestedPropertyVal(warehouse, 'availableProducts.Drink.tea', 2, 'Available Products.Drinks does not have correct value');
})

it('Multiple insertions -> capacity overflow should throw an exception', function(){

    expect(function(){
    warehouse.addProduct('Food', 'Apple', 2)
}).to.not.throw("There is not enough space or the warehouse is already full");
expect(function(){
    warehouse.addProduct('Food', 'Apple', 2)
}).to.not.throw("There is not enough space or the warehouse is already full");
expect(function(){
    warehouse.addProduct('Food', 'Apple', 2)}).to.throw("There is not enough space or the warehouse is already full");
})

it('Adding products with the same name should increase quantity', function(){
    let result1 = warehouse.addProduct('Food', 'Apple', 2);
    let result2 = warehouse.addProduct('Food', 'Apple', 2);


expect(result2).to.deep.equal({'Apple' : 4}, 'Product was not added correctly');
assert.nestedPropertyVal(warehouse, 'availableProducts.Food.Apple', 4, 'Property Available Products does not have a correct value');
})
})

describe('orderProducts', function(){

    let warehouse;
    let capacity = 150;
  
    let drinks = ['Cola', 'Tea', 'Coffee', 'Wine', 'Vodka', 'Malibu', 'Pina Colada', 'Rum'];
    let foods = ['Apple', 'Banana', 'Pear', 'Peach', 'Cucumber', 'Steak', 'Fish', 'Chips', 'Beans'];

    beforeEach(function () {
        warehouse = new Warehouse(capacity);
        for(let i = 1; i <= 20; i++){
warehouse.addProduct('Drink', drinks[i % drinks.length], i % drinks.length);
warehouse.addProduct('Food', foods[i % foods.length], i % foods.length);
        }
    })

    it('orderProducts should return products sorted in descending order', function(){
let foodResult = warehouse.orderProducts('Food');
let drinksResult = warehouse.orderProducts('Drink');
assert.hasAllKeys(foodResult, foods, 'Result does not contain correct keys');
assert.hasAllKeys(drinksResult, drinks, 'Result does not have correct number of keys');

let foodKeys = Object.keys(foodResult);
let drinksKeys = Object.keys(drinksResult);

for(let i = 0; i < foodKeys.length - 1; i++){
    let firstValue = +foodResult[foodKeys[i]];
    let secondValue = +foodResult[foodKeys[i + 1]];
    assert.isAtLeast(firstValue, secondValue, 'Foods are not sorted correctly');
}

for(let i = 0; i < drinksKeys.length - 1; i++){
    assert.isAtLeast(drinksResult[drinksKeys[i]], drinksResult[drinksKeys[i + 1]], 'Drinks are not sorted correctly');
}

    })
})

describe('occupiedCapacity', function(){

    let capacity = 10;
    let warehouse;

    beforeEach(function(){
        warehouse = new Warehouse(capacity);
    })

    it('empty warehouse should return 0', function(){

        assert.equal(warehouse.occupiedCapacity(), 0, 'Occupied capacity of empty warehouse should be zero');
    })

    it('non-empty warehouse should return correct capacity', function() {
       warehouse.addProduct('Food', 'Apple', 2);
       let result1 = warehouse.occupiedCapacity();
       warehouse.addProduct('Food', 'Banana', 2);
       let result2 = warehouse.occupiedCapacity();
       warehouse.addProduct('Drink', 'Coffee', 1);
       let result3 = warehouse.occupiedCapacity();
       warehouse.addProduct('Food', 'Apple', 2);
       let result4 = warehouse.occupiedCapacity();
       
       assert.equal(result1, 2, 'Occupied capacity is not correct');
       assert.equal(result2, 4, 'Occupied capacity is not correct');
       assert.equal(result3, 5, 'Occupied capacity is not correct');
       assert.equal(result4, 7, 'Occupied capacity is not correct');
    })   

})

describe('revision', function () {
    let capacity = 10;
    let warehouse;

    beforeEach(function(){
        warehouse = new Warehouse(capacity);
    })

    it('empty warehouse should return correct message', function(){
assert.equal(warehouse.revision(), 'The warehouse is empty', 'Empty warehouse did not return correct message');

    })


    it('non-empty warehouse should return correct ouput', function(){

        warehouse.addProduct('Food', 'Apple', 2);
        warehouse.addProduct('Food', 'Banana', 2);
        warehouse.addProduct('Drink', 'Coffee', 1);

        let result = warehouse.revision();
        assert.typeOf(result, 'string', 'Revision output is not in the correct format');
        let resultArgs = result.split('\n');

        assert.include(resultArgs, '- Apple 2', 'Result does not contain correct value');
        assert.include(resultArgs, 'Product type - [Food]', 'Result does not contain correct value');
        assert.include(resultArgs, 'Product type - [Drink]', 'Result does not contain correct value');
        assert.include(resultArgs, '- Banana 2', 'Result does not contain correct value');
        assert.include(resultArgs, '- Coffee 1', 'Result does not contain correct value');

        assert.isBelow(resultArgs.indexOf('Product type - [Food]'), resultArgs.indexOf('Product type - [Drink]'), 'Foods should come before drinks');
        assert.isBelow(resultArgs.indexOf('- Apple 2'), resultArgs.indexOf('- Coffee 1'), 'Foods should come before drinks');

       
    })
    
})

describe('scrapeAProduct', function(){
    let capacity = 10;
    let warehouse;

    beforeEach(function(){
        warehouse = new Warehouse(capacity); 
        warehouse.addProduct('Food', 'Apple', 2);
        warehouse.addProduct('Food', 'Banana', 2);
        warehouse.addProduct('Drink', 'Coffee', 1);
    })

    it('non-existing product should throw an exception', function(){
          expect(function(){warehouse.scrapeAProduct('Pear', 2)}).to.throw('Pear do not exists');
    })

    it('existing product should change its quantity', function(){
        let occupiedCapacity = warehouse.occupiedCapacity();
let result1 = warehouse.scrapeAProduct('Apple', 1);
let result2 = warehouse.scrapeAProduct('Coffee', 1);
let occupiedCapacityAfterRemoval = warehouse.occupiedCapacity();

expect(result1).to.deep.equal({'Apple' : 1, 'Banana': 2}, 'ScapeAProduct did not return correct result');
expect(result2).to.deep.equal({'Coffee' : 0}, 'ScapeAProduct did not return correct result');
assert.nestedPropertyVal(warehouse, 'availableProducts.Food.Apple', 1, 'Warehouse does not store correct values');
assert.nestedPropertyVal(warehouse, 'availableProducts.Food.Banana', 2, 'Warehouse does not store correct values');
assert.nestedPropertyVal(warehouse, 'availableProducts.Drink.Coffee', 0, 'Warehouse does not store correct values');
assert.equal(occupiedCapacityAfterRemoval, occupiedCapacity - 2, 'Occupied capacity is not updated after removal');
    })

    it('if given quantity is more than product quantity, result should be zero', function(){
let result1 = warehouse.scrapeAProduct('Coffee', 2);
let result2 = warehouse.scrapeAProduct('Banana', 8);
expect(result1).to.deep.equal({'Coffee': 0}, 'ScapeAProduct did not return correct result');
expect(result2).to.deep.equal({'Apple': 2, 'Banana' : 0}, 'ScapeAProduct did not return correct result');
assert.nestedPropertyVal(warehouse, 'availableProducts.Food.Apple', 2, 'Warehouse Foods does not store correct values')
assert.nestedPropertyVal(warehouse, 'availableProducts.Food.Banana', 0, 'Warehouse Foods does not store correct values');;
assert.nestedPropertyVal(warehouse, 'availableProducts.Drink.Coffee', 0, 'Warehouse does not store correct values');
    })
})









})