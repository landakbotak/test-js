const prompt = require('prompt-sync')({sigint: true});

const x = prompt('Input x: ');
if (x > 0 && x % 2 === 0){
    hasil = Math.sqrt(x);
    console.log(hasil);
} else if (x < 0) {
    console.log("Tidak bisa input bilangan negatif");
} else if (x % 2 !== 0) {
    console.log("Tidak bisa input bilangan ganjil");
}

