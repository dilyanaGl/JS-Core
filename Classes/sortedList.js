class SortedList{
    constructor(){
        this.nums = [];
        this.size = 0;
    }

    add(num){
        this.nums.push(+num);
        this.nums = this.nums.sort((a, b) => a - b);
        this.size++;
    }

    remove(index){
        if(index >= 0 && index < this.nums.length)
        {
         this.nums.splice(index, 1);
         this.size--;
        }       
    }

    get(index){
        if(index >= 0 && index < this.nums.length)
        {
            return this.nums[index];
            
        }  
    }

    size(){
        return this.nums.length;
    }
}

let nums = new SortedList();
for(let i = 10; i >= 0; i--){
    nums.add(i);
}

nums.remove(-1);
console.log(nums.get(2));
nums.remove(2);
console.log(nums.get(2));
nums.remove(10);

console.log(nums.size);
console.log(nums.nums);

