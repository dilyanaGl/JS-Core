let solution = (function(){
let add = function(arr1, arr2){
    return [(arr1[0] + arr2[0]), (arr1[1] + arr2[1])];
}

let multiply= function(arr1, num){
    return [(arr1[0] * num), (arr1[1] * num)];

}

let length = function(arr){
    return Math.sqrt(arr[0] * arr[0] + arr[1] * arr[1]);
}
let dot = function(arr1, arr2){
    return arr1[0] * arr2[0] + arr1[1] * arr2[1];
}

let cross = function(arr1, arr2){
    return arr1[0] * arr2[1] - arr1[1] * arr2[0];
}

return {add, multiply, length, dot, cross};

})();


console.log(solution.add([1, 1], [1, 0]));