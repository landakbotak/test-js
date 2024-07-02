const prompt = require('prompt-sync')({sigint: true});

const num1 = prompt('Enter a first number: ');
const num2 = prompt('Enter a second number: ');

console.log('first number + Second number = ',Number(num1) + Number(num2));
// console.log(Number(num1) + Number(num2));

var a = 5;
var b = 3;

var c = a + b; // operator penjumlahan
console.log('C: ',c);