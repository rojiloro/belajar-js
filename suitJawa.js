var tanya = true;
while( tanya ){
    // menangkap pilihan pemain suit
    var p = prompt("Pilih : gajah, semut, orang ");
    // menangkap komputer melakukan suit
    // membangkitkan bilangan random
    var comp = Math.random();

    if( comp < 0.34){
        comp = 'gajah';
    }else if( comp >= 0.34 && comp < 0.67){
        comp = 'orang';
    }else{
        comp = 'semut';
    }

    var hasil = '';
    // menentukan rules
    if(p == comp){
        hasil = 'SERI';
    }else if(p == 'gajah'){
        /*if(comp == 'orang'){
            hasil = 'MENANG'
        }else{
            hasil = 'KALAH'
        }*/
        hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
    }else if(p == 'orang'){
        hasil = (comp == 'semut') ? 'MENANG' :'KALAH';
    }else if(p == 'semut'){
        hasil = (comp == 'gajah') ? 'MENANG' : 'KALAH';
    }else{
        hasil = 'Memasukan pilihan yang salah'
    }

    // menampilkan hasil
    alert('Kamu memilih : '+ p +' dan Komputer memilih : '+ comp +'\nMaka hasilnya : Kamu '+hasil);

tanya = confirm('lagi?');
}

alert('Terima kasih sudah bermain');