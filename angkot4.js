var jmlAngkot = 10;
var angkotBeroperasi = 6;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. '+noAngkot+' Beroperasi dengan baik');
    }else if (noAngkot === 8) {
        console.log('Angkot No. '+noAngkot+' Kerja Lembur');
    }else{
        console.log('Angkot No. '+noAngkot+' tidak beroperasi dengan baik');
    }
}