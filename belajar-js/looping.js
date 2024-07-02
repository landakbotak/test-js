// for (let i = 0; i <= 10; i++){
//     console.log("Perulangan ke-"+i);
// }
// output:
// Perulangan ke-0
// Perulangan ke-1
// Perulangan ke-2
// Perulangan ke-3
// Perulangan ke-4
// Perulangan ke-5
// Perulangan ke-6
// Perulangan ke-7
// Perulangan ke-8
// Perulangan ke-9
// Perulangan ke-10

const prompt = require('prompt-sync')({sigint: true});

var ulangi = prompt("Are you ready? "); // input 1
console.log("Start");
var counter = 0;

while(ulangi){
    var jawab = prompt("Apakah anda mau mengulang? (yes/no): ")
    counter++;
    if(jawab == false || jawab == "no"){
        ulangi = false;
    }
    console.log("Pengulangan ke-"+counter);
}

// Are you ready? yes
// Start
// Apakah anda mau mengulang? (yes/no): yes
// Pengulangan ke-1
// Apakah anda mau mengulang? (yes/no): yes
// Pengulangan ke-2
// Apakah anda mau mengulang? (yes/no): yes
// Pengulangan ke-3
// Apakah anda mau mengulang? (yes/no): yes
// Pengulangan ke-4
// Apakah anda mau mengulang? (yes/no): yes
// Pengulangan ke-5
// Apakah anda mau mengulang? (yes/no): yes
// Pengulangan ke-6
// Apakah anda mau mengulang? (yes/no): no
// Pengulangan ke-7
// PS C:\Users\riska\VS Code\test-js> 

