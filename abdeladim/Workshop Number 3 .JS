
//  convertir un nombre decimal de base de 10 en nombre binaire de Base de 2
function binaire() {
    var y = 120, x = "";
    while (y > 0) {
        x = (y % 2) + x;
        y = Math.floor(y / 2);
    }
    return x;
}
console.log(binaire());



// other way: 

// Decimale vers  binaire :
function binaryToDecimal(str) {
   return parseInt(str,(2));

}

console.log(binaryToDecimal(1111000));