// Comparaison de deux chaines de caractère en comptant le nombre de ses caractères  
function comp(chain1 , chain2){
    if(chain1.length > chain2.length){
        console.log(`${chain1} est supérieure de ${chain2}`)
    }else if(chain1.length === chain2.length){
        console.log(`${chain1} est égale a ${chain2}`)
    }else{
        console.log(`${chain1} est inférieure de ${chain2}`)
    }
}
comp("AB", "CDEF");