

function palindroTrueOrFalse(str) {
    let str2 = str.replace(/\W/g, "").split(``).join();
    let strRev = str.replace(/\W/g, "").split(``).reverse().join();

    if (str2.toLowerCase() == strRev.toLowerCase()) {
        console.log(true);        
    }else{
        console.log(false);        
    }
}

palindroTrueOrFalse(`ai lati d'italia`);
palindroTrueOrFalse(`questa frase non è palindroma`);
palindroTrueOrFalse(`I topi non avevano Nipoti`);

// appunto per il Q&A se utilizzo la funzione più volte con risultato sempre true o sempre false, 
// viene stampata solo una volta
// Se invece i "true" ed i "false" si alternano vengono stampati tutti