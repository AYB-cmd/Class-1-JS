
// var nmr = prompt("entre your phone number (ex :2126********) :");
var nmr = "212600499332";
var output = [];
for (var i = 0, len = nmr.length; i < len; i++) {
    output.push(+nmr.charAt(i))
};

output = "(+" + output.slice(0,3).join("") + ") " + output.slice(3,7).join("") + "-" + output.slice(7,12).join("")

console.log(output);






