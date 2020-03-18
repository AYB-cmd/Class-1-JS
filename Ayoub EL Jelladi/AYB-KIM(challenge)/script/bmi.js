// the challenge is reprograming  'BMI calculateur app' from a 
// true/false processing to multi-condition processing



var person1Name = prompt(' what is your name? :');
var person2Name = prompt(' what is your name too? :');
var person1BMI;
var person2BMI;
var result;

var person1Mass = prompt(person1Name + ' what is your mass? :');
var person1Height = prompt(person1Name + ' what is your Height? :');

var person2Mass = prompt(person2Name + ' what is your Mass? :');
var person2Height = prompt(person2Name + ' what is your Height? :');

console.log(person1Name + ' mass is ' + person1Mass + 'kg' + ' and his height ' + person1Height + 'm');
console.log(person2Name + ' mass is ' + person2Mass + 'kg' + ' and his height ' + person2Height + 'm');

person1BMI = person1Mass / (person1Height*person1Height);
person2BMI = person2Mass / (person2Height*person2Height);

console.log(person1Name + ' BMI is ' +(person1BMI));
console.log(person2Name + ' BMI is ' +(person2BMI));



// result = person1 > person2;

if (person1BMI > person2BMI) {
console.log(person1Name + " your BMI is higher than " + person2Name);
}
else if(person1BMI < person2BMI){
    console.log(person2Name + " your BMI is higher than " + person1Name);
}else {
    console.log(" Your are Even ")
};

