class Rat{
    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }
    
    getRats(){
        return this.unitedRats;
    }

    unite(rat){
        if(Rat.prototype.isPrototypeOf(rat)){
            this.unitedRats.push(rat);
        }
    }

    toString(){
        let result = this.name;
this.unitedRats.forEach(p => result += `\n##${p.name}`);
return result;
        
    }
}


let rat2 = new Rat("Viktor");
let rat3 = new Rat("Vichi");
let rat4 = "fake rat";
rat2.unite(rat4);
console.log(rat2.getRats().length);





