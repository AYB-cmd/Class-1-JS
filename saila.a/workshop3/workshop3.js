function dot(){
    var y =[120];
    var x ="";
    var i;
    for(i=0; y>0;i++){
        x+=(y%2);
        y= Math.floor(y/2);
    }
    return x.split("").reverse().join("");
    }
    console.log(dot());