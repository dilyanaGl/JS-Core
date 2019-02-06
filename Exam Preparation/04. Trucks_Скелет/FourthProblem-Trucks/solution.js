function solve() {
    Array.from(document.getElementsByTagName('button')).forEach(p => p.addEventListener('click', manageTrucks));
let trucks = [];
let backUpTires = [];
    function manageTrucks(event){
        let button = event.target.textContent;
        let fieldSets = document.getElementsByTagName('fieldSet');
        switch(button){
            case 'Add new truck':
            addTruck();
            break;
            case 'Add new tires':
            addTires();
            break;
            case 'Go to work':
            work();
            break;
            case 'End of the shift':
            end();
            break;
        }        
    
    function end(){
        let textArea = document.getElementsByTagName('textArea')[0];
        let result = '';
        trucks.forEach(p => result += `Truck ${p.plateNumber} has traveled ${p.travelledDistance}.\n`);
        result += `You have ${backUpTires.length} sets of tires left.\n`;
        textArea.textContent = result;
    }

    function work(){
let plateNum = document.getElementById("workPlateNumber").value;
let distance = document.getElementById('distance').value;
let truck = trucks.filter(p => p.plateNumber == plateNum)[0];
if(truck){
     truck = trucks.filter(p => p.plateNumber == plateNum)[0];
if(!canTiresTravel(truck.tireCondition, distance)){
    tryChangeTires(truck);
}
if(canTiresTravel(truck.tireCondition, distance)){
   addDistance(truck, distance);
}
}

}

    function tryChangeTires(truck){
        if(backUpTires.length > 0){
            let currentTires = backUpTires.shift()[0];
           truck.tireCondition = currentTires; 
           let tireField = document.getElementsByClassName('tireSet');
           let relevantTireField = Array.from(tireField)
           .filter(p => p.textContent == currentTires.join(' '))[0];
           let parent = relevantTireField.parentNode;
           parent.removeChild(relevantTireField);        

        }        
    }

    function addDistance(truck, distance){
         truck.tireCondition = truck.tireCondition.map(p => p - Math.ceil(+distance / 1000));
    truck.travelledDistance += +distance;
    }

    function canTiresTravel(tireCondition, distance){
        let minNum = tireCondition.sort((a, b) => a - b)[0];
        return minNum >= Math.ceil(+distance / 1000);
    }
   

    function addTires(){

        let tires = document.getElementById("newTiresCondition").value.split(' ').map(Number);
        backUpTires[backUpTires.length] = [];
        backUpTires[backUpTires.length- 1].push(tires);
        let backUpTiresBox = fieldSets[fieldSets.length - 2]
        .getElementsByTagName('div')[0];
       
            let div = document.createElement('div');
            div.setAttribute('class', 'tireSet');
            div.textContent = tires.join(' ');
            backUpTiresBox.appendChild(div);         


    }

    function addTruck(){ 
        let plateNumber = document.getElementById("newTruckPlateNumber").value;
        let currentTrucksWithPlateNumber = trucks.filter(p => p.plateNumber === plateNumber);
    
        if(currentTrucksWithPlateNumber.length == 0){
            let tireCondition = document.getElementById("newTruckTiresCondition")
            .value.split(' ').map(Number);

            let truck = {plateNumber : plateNumber, tireCondition : tireCondition, travelledDistance : 0};
            trucks.push(truck);   
            
            let trucksBox = fieldSets[fieldSets.length - 1].getElementsByTagName('div')[0];
     
            let div = document.createElement('div');
            div.setAttribute('class', 'truck');
            div.textContent = truck.plateNumber;
            trucksBox.appendChild(div);
               
        }
        
      

    }
}
    
}


function work(plateNum, distance){

    let trucks = [{plateNumber:'2323', tireCondition:[1, 2, 3, 4, 5], travelledDistance: 0},
    {plateNumber:'45344', tireCondition:[3, 4, 5, 6, 7], travelledDistance:0}
];
let backUpTires = [[2, 3, 4, 5, 3]];

  //  let plateNum = document.getElementById("workPlateNumber").value;
    //let distance = document.getElementById('distance').value;
    
        truck = trucks.filter(p => p.plateNumber == plateNum)[0];
        if(truck)
        {
              if(!canTiresTravel(truck, distance))
              {
                 tryChangeTires(truck);  
              }
        if(canTiresTravel(truck, distance)){
       addDistance(truck, distance);
    }   
    }     

    console.log(trucks);
    console.log(backUpTires);
  
        function tryChangeTires(truck){
            if(backUpTires.length > 0){
               truck.tireCondition = backUpTires.shift(); 
            }        
        }
    
        function addDistance(truck, distance){
            truck.tireCondition = truck.tireCondition.map(p => (p - Math.floor(+distance / 1000)));
        truck.travelledDistance += +distance;
        }
    
        function canTiresTravel(truck, distance){
            return truck.tireCondition.sort((a, b) => a - b)[0] >= Math.floor(+distance / 1000);
        }
    }  

work('2323', 1000);

