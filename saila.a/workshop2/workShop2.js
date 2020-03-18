
const reverse =(str) =>{
    if(!str) {
        return str;

    }
    else{
        return str.split("").reverse().join("");
    }
}
var z=reverse("madara")
console.log(z);