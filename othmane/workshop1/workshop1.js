var str1 = prompt( '1-Your Name :');
var str2 = prompt( '2-Your Name :');

function compare(str1,str2){
    if (str1.length===str2.length){
        console.log(`${str1} est égal à ${str2}`)
    } else{
       
            console.log(`${str1} est diffèrent de ${str2}`)
        
    }
}
compare(str1,str2);