function compChaine(chain1 , chain2){
    if(chain1.length > chain2.length){
        console.log(`la chaine ${chain1} est plus grand que ${chain2}`)
    }else if(chain1.length === chain2.length){
        console.log(`la chaine ${chain1} est egale  ${chain2}`)
    }else{
        console.log(`la chaine ${chain1} est plus petite que ${chain2}`)
    }
}

compChaine("yaya" , "youcode");
