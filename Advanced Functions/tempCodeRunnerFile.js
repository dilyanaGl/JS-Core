let result = (function(){
    
    let rates = ['hot', 'controversial', 'unpopular', 'new'];
    let context;
let upvote = () => {
context.upvotes = context.upvotes + 1;
//console.log(context.upvotes);

};
let downvote = () => {
    context.downvotes = context.downvotes + 1;
    //console.log(context.downvotes);
};
let score = () => {
    
    let upvotes = context.upvotes;
    let downvotes = context.downvotes;
    let statusIndex;
    let arrResult = [];
    
    
    if(upvotes >= 0.66 * (upvotes + downvotes)){
statusIndex = 0;
} else if(upvotes - downvotes >= 0 && (upvotes > 100 || downvotes > 100)){
    statusIndex = 1;
} else if(upvotes - downvotes < 0){
statusIndex = 2
} else if(upvotes + downvotes < 10){
    statusIndex = 3;
}


if(post.downvotes + post.upvotes > 50){
let addedNum = Math.ceil(0.25 * Math.max(upvotes, downvotes));
upvotes += addedNum, 
downvotes += addedNum;
}
arrResult.push(upvotes);
arrResult.push(downvotes);
arrResult.push(upvotes - downvotes);
if(statusIndex){
    arrResult.push(rates[statusIndex]);
}

return arrResult;

};

let commands = {
'upvote' : upvote, 
'downvote' : downvote,
'score' : score
};

 function execute(commandName){     
     context = this;
    return commands[commandName]();
};

return execute;

})()