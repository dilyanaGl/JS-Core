function solve(towns){
let sortedObjects = {};
for(let i = 0; i < towns.length; i++){
    if(!sortedObjects[towns[i].town]){
        sortedObjects[towns[i].town] = {};
        sortedObjects[towns[i].town].profit = 0;
        sortedObjects[towns[i].town].registrations = 0;       

    }
    sortedObjects[towns[i].town].profit += +towns[i].price;
    sortedObjects[towns[i].town].registrations++;   

}

let mostProfitableTown = Object.keys(sortedObjects).sort().sort((a, b) => {
    let cmp1 = sortedObjects[b].profit - sortedObjects[a].profit;
if(cmp1 != 0)
{
    return cmp1;
}

let cmp2 = sortedObjects[b].registrations - sortedObjects[a].registrations;
if(cmp2 != 0){
    return cmp2;
}
return a - b;
})[0];

console.log(`${mostProfitableTown} is most profitable - ${sortedObjects[mostProfitableTown].profit} BGN`);

let townCars = {};
let popularTownCars = towns.filter(p => p.town == mostProfitableTown);
for(let i = 0; i < popularTownCars.length; i++){
    if(!townCars[popularTownCars[i].model]){
townCars[popularTownCars[i].model] = {};
townCars[popularTownCars[i].model].count = 0;
townCars[popularTownCars[i].model].price = popularTownCars[i].price;

}
if(popularTownCars[i].price > townCars[popularTownCars[i].model].price){
    townCars[popularTownCars[i].model].price = popularTownCars[i].price;
}
    townCars[popularTownCars[i].model].count++;
}
let mostPopularModel = Object.keys(townCars).sort().sort((a, b) => {
let cmp1 = townCars[b].count - townCars[a].count;
if(cmp1 != 0){
    return cmp1;
}
let cmp2 = townCars[b].price - townCars[a].price;

if(cmp2 != 0){
    return cmp2;
}
return a - b;
})[0];

console.log(`Most driven model: ${mostPopularModel}`);
let townsList = {};
for(let i = 0; i < towns.length; i++){
if(towns[i].model == mostPopularModel){
    if(!townsList[towns[i].town]){
        townsList[towns[i].town] = [];
    }
    townsList[towns[i].town].push(towns[i].regNumber);

}


}

Object.keys(townsList).sort().forEach(p => 
    {

console.log(`${p}: ${townsList[p].sort().join(', ')}`);
    });

///.log(townsList);
}

solve([ { 'model': 'BMW', 'regNumber': 'B1234SM', 'town': 'Varna', 'price': '2'},
{ 'model': 'BMW', 'regNumber': 'C5959CZ', 'town': 'Sofia', 'price': '8'},
{ 'model': 'Tesla', 'regNumber': 'NIKOLA', 'town': 'Burgas', 'price': '9'},
{ 'model': 'BMW', 'regNumber': 'A3423SM', 'town': 'Varna', 'price': '3'},
{ 'model': 'Lada', 'regNumber': 'SJSCA', 'town': 'Sofia', 'price': '2'} ]
);