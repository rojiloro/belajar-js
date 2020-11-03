function tambah(){
    var hasil = 0;
    for( var i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }
    return hasil;
}

// function kali(a,b) {
//     return a * b;
// }

// var a = parseInt(prompt('Masukan nilai 1:'));
// var b = parseInt(prompt('Masukan nilai 2:'));
var hasil = tambah(4,5,12,10,9);
console.log(hasil);