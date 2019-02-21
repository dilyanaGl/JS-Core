function sort(arr, methodType){
    const sortArray = {
'asc': function asc(arr){ return arr.sort((a,b) => a - b);},
'desc': function desc(arr) {return arr.sort((a, b) => b - a);}
};

return sortArray[methodType](arr);
}

console.log(sort([2, 3, 12, 3, 4], 'desc'));




