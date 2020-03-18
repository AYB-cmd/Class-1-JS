//Récursivité et chaine de caractères 
const reverse = (str) => {
if(!str) {
return str;
}
else{
    return str.split("").reverse().join("");
}
}
var z=reverse("tijani");
console.log(z);

// other way :

let a = "tijani";
 let rev = a.split("").reverse().join("");
 console.log(rev);