var player1 = "Ayoub",
    player2 = "Nizar",
    gameRule    = ["Wara9a","Hajara","Mi9as"];

var  game1 = gameRule[Math.floor(Math.random()*3)];
var  game2 = gameRule[Math.floor(Math.random()*3)];

    console.log(player1 + " Your attack is " + game1);
    console.log(player2 + " Your attack is " + game2);

    if (game1 === game2){
        console.log("it's a DRAW");
    }else if (game1 === "Mi9as" && game2 ==="Wara9a"){
        console.log(player1 + " You WON");
    }else {
        console.log(player2 + " You WON")
    };
