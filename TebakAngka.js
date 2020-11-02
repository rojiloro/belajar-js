// alert info tebakan player 1-10 dengan 3 kesempatan
// menangkap tebakan player 1-10 dengan 3 kesempatan
// muncul hasil (terlalu rendah, terlalu tinggi) dan muncul peluang kesempatan
// jika benar maka keluar angka yang disimpan komputer, dan jika kondisi benar maka muncul alert terimakasih
// jika kesempatan habis maka muncul alert kesempatan habis dan anda gagal dan memunculkan angka yang dicari

// alert info permainan
// perulangan tanya
    alert('ayo tebak angka 1-10 \nkamu hanya memiliki 3 kesempatan');
    // menangkap pilihan pemain
    
    // membangkitkan pilihan random komputer
    var comp = Math.random();
    
    if(comp < 0.1){
        comp = '1';
    }else if(comp > 0.1 && comp <= 0.2){
        comp = '2';
    }else if(comp > 0.2 && comp <= 0.3){
        comp = '3';
    }else if(comp > 0.3 && comp <= 0.4){
        comp = '4';
    }else if(comp > 0.4 && comp <= 0.5){
        comp = '5';
    }else if(comp > 0.5 && comp <= 0.6){
        comp = '6';
    }else if(comp > 0.6 && comp <= 0.7){
        comp = '7';
    }else if(comp > 0.7 && comp <= 0.8){
        comp = '8';
    }else if(comp > 0.8 && comp <= 0.9){
        comp = '9';
    }else{
        comp = '10';
    }
    
    var hasil = '';
    // menentukan rules

    
    for( var kesempatan = 3; kesempatan >= 0; kesempatan--){
        var p = prompt('Masukan angka 1-10 : ');
        if (p == comp){
            hasil = 'Anda benar \n angka yang dicari adalah '+comp;
            kesempatan = 0;
        }else if(p < comp){
            hasil = 'Terlalu RENDAH \n anda mempunyai ' +kesempatan+' kesempatan';
        }else if(p > comp){
            hasil = 'Terlalu TINGGI \n anda mempunyai ' +kesempatan+ ' kesempatan';
        }else{
            hasil = 'Angka yang anda masukan salah';
        }
    

    // menampilkan hasil
    alert(hasil);
    }
    alert('terimakasih sudah bermain');