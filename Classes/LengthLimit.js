
class Stringer{
    constructor(str, lengthLimit){
        this.innerString = str;
        this.innerLength = +lengthLimit;
    }

    increase(num){
        this.innerLength += +num;
    }

    decrease(num){
        if(num > this.innerLength){
            num = this.innerLength;
        }
        this.innerLength -= +num;
    }

    toString(){
        return this.innerString.substring(0, this.innerLength) 
        + (this.innerString.length > this.innerLength ? '...' : ''); 
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(1);
console.log(test.toString()); 

