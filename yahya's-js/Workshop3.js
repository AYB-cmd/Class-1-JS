
function Binaire() {
    var y=120,
        x="";
        while(y>0){
            x=(y%2) +x;
            y=Math.floor(y/2);
        }
        return x;
}
console.log(Binaire());




