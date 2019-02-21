function solve(arr, commandLine){
    if(arr.length == 0){
        return;
    }
let headers = arr[0];
let [command, header, value] = commandLine.split(' ');
switch(command){
case 'sort':
sort(header);
break;
case 'hide':
hide(header);
break;
case 'filter':
filter(header, value);
break;
}

function filter(header, value){
    let index = arr[0].indexOf(header);
    if(index < 0)
    {
        return;
    }
    let result = '';
result += arr[0].join(' | ') + '\n';
    for(let i = 1; i < arr.length; i++){
        if(arr[i][index] == value){
result += arr[i].join(' | ') + '\n';
        }

    }

    console.log(result);

}

function hide(header){
    let headerIndex = arr[0].indexOf(header);
    if(headerIndex < 0){
        return;
    }
let newArr = [];
for(let i = 0; i < arr.length; i++){
    newArr[i] = [];
    for(let k = 0; k < arr[i].length; k++){
        if(k != headerIndex){
            newArr[i].push(arr[i][k]);
        }
    }
}
let result = '';
for(let i = 0; i < newArr.length; i++){
    
 result += newArr[i].join(' | ') + '\n';
}

console.log(result);
}

function sort(header){
    let index = headers.indexOf(header);
    if(index < 0)
    {
        return;
    }
     let arrayKeys = {};
    for(let i = 1; i < arr.length; i++){
        arrayKeys[arr[i][index]] = {};
        arrayKeys[arr[i][index]].index = i;
    }
   // console.log(arrayKeys);
    let sortedValues = Object.keys(arrayKeys).sort().map(p => arrayKeys[p].index);
    
//console.log(sortedValues);
console.log(arr[0].join(' | '));
let result = '';
for(let k = 0; k < sortedValues.length; k++){
    //console.log(arr[sortedValues[k]]);
    result += arr[sortedValues[k]].join(' | ')+"\n";
}
  console.log(result);

    

    // console.log(sortedKeys);


  
}

}

//solve([], 'a');

solve([['firstName', 'age', 'grade', 'course'],
['Peter', '25', '5.00', 'JS-Core'],
['George', '34', '6.00', 'Tech'],
['Marry', '28', '5.49', 'Ruby']],
'sort firstName'
);