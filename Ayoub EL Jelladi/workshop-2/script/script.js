// workshop 2
var str = prompt("enter a word: ")
var result;

const rev = (str) =>{
    if(!str) {
        return str;
    }else{
        return str.split("").reverse().join("")
    }
}
result = rev(str);
console.log(result);