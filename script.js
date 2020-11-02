var x = new Array();
var input = prompt('Masukan nilai x = ');

for( i = 1; i <= input; i++){
    x[i] = new Array();
    for( j = 1; j <= i; j++){
        if( j == 1 || j == i){
            x[i][j] = 1;
        }
        else{
            x[i][j] = x[i-1]+x[i-1][j];
        }
    }
}
for ( i = 1; i <= input; i++){
    /*for( g = input; g > input; g--){
        document.write(" ");
    }*/
    for( j = 1; j <= i; j++){
        document.write(x[i][j]+'');
    }
    document.write("<br>");
}
//pola segitiga pascal adalah segitiga yang bentuknya
// setiap baris diawali dengan 1. dan angka ditengah
// akan ditambahkan dengan angka yang di sebelah kirinya