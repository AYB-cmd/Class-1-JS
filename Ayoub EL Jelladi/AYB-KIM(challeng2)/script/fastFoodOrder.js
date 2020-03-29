// write a program that displays the following menu for the food items available to take order
//  from the customer:
// • B= Burger
// • F= French Fries
// • P= Pizza
// • S= Sandwiches
// The program inputs the type of food and quantity. It finally displays the total charges for the
//  order according to following criteria:
// • Burger = Rs. 200
// • French Fries= Rs. 50
// • Pizza= Rs. 500
// • Sandwiches= Rs. 150

var  B = 200
var  F = 50;
var  P = 500;
var  S = 150;
var  total = 0
var  msg = prompt('may I take your order sir : yes/no');

do {
    
   yourChoice = prompt('MENU\n • B= Burger\n • F= French Fries\n • P= Pizza\n • S= Sandwiches\n what is your choice Sir :');
    yourChoice = yourChoice.toUpperCase()
   switch (yourChoice) {
       case 'B':
           yourChoice = B
           break;
       case 'F' :
           yourChoice = F  
           break;
       case 'P' :
           yourChoice = P  
           break 
       case 'S' :
           yourChoice = S
           break;
       default:
           break;
   }
    total = total + yourChoice;
    msg = prompt('you want something else yes/no :');
} while (msg == 'yes' || msg == 'YES');
console.log('Sir your total charges for the order is ' + total +'DH')



    
