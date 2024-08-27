// let str = `Ai lati d'Italia`;
// let str2 = str.replaceAll(" ", ``).replaceAll(`'`, ``).split(``).join();
// let strRev = str.replaceAll(" ", ``).replaceAll(`'`, ``).split(``).reverse().join();

// console.log(str);
// console.log(str2);
// console.log(strRev);



function palindroTrueOrFalse(str) {
    let str2 = str.replaceAll(" ", ``).replaceAll(`'`, ``).split(``).join();
    let strRev = str.replaceAll(" ", ``).replaceAll(`'`, ``).split(``).reverse().join();

    if (str2 == strRev) {
        console.log(true);        
    }else{
        console.log(false);        
    }
    return;
}

palindroTrueOrFalse(`ai lati d'italia`);
palindroTrueOrFalse(`Ai lati d'Italia`);