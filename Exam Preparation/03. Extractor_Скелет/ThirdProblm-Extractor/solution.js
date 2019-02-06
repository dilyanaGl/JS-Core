function solve() {
Array.from(document.getElementsByTagName('button')).forEach((p) => p.addEventListener('click', extract));

function extract(){
    let input = document.getElementById('input').value;

    let numPattern = /[0-9]+/gm;
    let numToExtract = numPattern.exec(input)[0];
    let parsedStr = input.substring(0, +numToExtract + numToExtract.length);
    let charToSplit = parsedStr[parsedStr.length - 1];
    let arr = input.split(charToSplit).filter(p => p);
    let pattern = new RegExp('[' + arr[0].substring(numToExtract.length) + ']', 'gm');
    let str = arr[1].replace(pattern, '');
    while(str.indexOf('#') != -1){
        str = str.replace('#', ' ');
    }  

    document.getElementById('output').textContent = str.trim();
}    
}

function extract(input){
    let numPattern = /[0-9]+/;
    let numToExtract = numPattern.exec(input)[0];
    let splittedStr = input.substring(Number(numToExtract) - 1);
    let charToSplit = splittedStr[splittedStr.length - 1];


    let arr = input.split(charToSplit).filter(p => p);
    let pattern = new RegExp('[' + arr[0].replace(numToExtract, '') + ']', 'g');
    let str = arr[1].replace(pattern, '');
    while(str.indexOf('#') != -1){
        str = str.replace('#', ' ');
    }
    
    console.log(pattern);
    console.log(arr[1]);
    console.log(str);
}

extract("47%!3-7=@+Ja45v=aS67cri!pt#Co%@@re#-#Fun4%!d=am6e@5n7t%!als#-#2018+");