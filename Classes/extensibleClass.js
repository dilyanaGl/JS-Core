class Extensible{    

}

Extensible.prototype.id = (function(){
let id = 0;
function getId(){
    return ++id;
}

return getId();
})();

let obj1 = new Extensible();
let obj2 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);