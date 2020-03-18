

function convert() {
 var x = "";
 var y = prompt("Enter a number: ");
  
  while ( y > 0) {
      x +=y % 2; 
      y = Math.floor(y / 2);
     
  };
  
  x = x.split("").reverse();
  return x
};


console.log(convert());