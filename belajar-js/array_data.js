var mobil = ["Avanza","Yaris","Vios"];

// mobil[1] = "Yaris"; // get element from array

mobil.push ("Veloz"); // add element in to array
mobil.push ("Brio"); // add element in to array
mobil.push ("Jazz"); // add element in to array

console.log(mobil); // [ 'Avanza', 'Yaris', 'Vios', 'Veloz', 'Brio', 'Jazz' ]
console.log(mobil.length); // 6

var arrayKosong = []; // create an empty array

for (let i=0; i<mobil.length; i++){
    console.log('Print mobil ke-'+i+": "+mobil[i]);
// Print mobil ke-0: Avanza
// Print mobil ke-1: Yaris
// Print mobil ke-2: Vios
// Print mobil ke-3: Veloz
// Print mobil ke-4: Brio
// Print mobil ke-5: Jazz
    arrayKosong.push(mobil[i]);
}
console.log(arrayKosong); // [ 'Avanza', 'Yaris', 'Vios', 'Veloz', 'Brio', 'Jazz' ]

delete mobil[3]; // hapus element pada array di index tertentu (Veloz)
mobil.pop(); // hapus elemen paling belakang
mobil.shift(); // hapus elemen paling depan

console.log(mobil); // [ 'Yaris', 'Vios', <1 empty item>, 'Brio' ]