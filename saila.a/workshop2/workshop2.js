const reverse =(str) => {
        if(!str) {
            return str;
        }
        else{
            return str.split("").reverse().join("");
        }
    }
    var z=reverse("othmane");
    console.log(z) 