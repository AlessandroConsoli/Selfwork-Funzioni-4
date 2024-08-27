let str = `Ai lati d'Italia`;
let str2 = str.replaceAll(" ", ``).replaceAll(`'`, ``).split(``);
let strRev = str.replaceAll(" ", ``).replaceAll(`'`, ``).split(``).reverse();

console.log(str);
console.log(str2);
console.log(strRev);



function palindroTrueOrFalse(str2, strRev) {
    if (str2 == strRev) {
        console.log(TRUE);        
    }else{
        console.log(False);        
    }
    return;
}

console.log(palindroTrueOrFalse);
