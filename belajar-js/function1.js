// create casual function
function hello1(){
    console.log("Hello World! 1");
}

// create function with expression
var hello2 = function(){
    console.log("Hello World! 2");
}

// create function with tanda panah
var hello3 = () => {
    console.log("Hello World! 3");
}

// create function with constructor
// var hello4 = new function('console.log("Hello World! 4");');

// create a function
function sayHello(){
    console.log("Hello World! 5");
}
sayHello(); // call function

// Function with parameter
function kali(a,b){
    hasilKali = a*b;
    console.log("Hasil Kali a*b = "+hasilKali);
}
kali(3,2); //Hasil Kali a*b = 6

// function that return value
function bagi (a,b){
    hasilBagi = a/b;
    return hasilBagi;
}

// call function
var nilai1 = 20;
var nilai2 = 5;
var hasilBagi = bagi(nilai1, nilai2);

console.log(hasilBagi); //  4