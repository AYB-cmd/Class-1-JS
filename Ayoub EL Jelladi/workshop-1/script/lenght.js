// workshop 1
var str1 = prompt('1- Your Name :');
var str2 = prompt('2- Your Name :');

function compare(str1,str2) {
    if (str1.length===str2.length){
        console.log(`${str1}  est égal à  ${str2}`);
    }else{
        if(str1.length > str2.length ){
            console.log(`${str1}  est supérieur de  ${str2}`);
        }
        else{
            console.log(`${str1} est inférieur de ${str2}`);
        }
    }
    
}
compare(str1,str2);