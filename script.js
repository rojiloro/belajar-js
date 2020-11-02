// menghitung 2 buah volume kubus
function jumlahVolumeDuaKubus(a, b){
    var total, v1, v2;
    
    v1 = a * a * a;
    v2 = b * b * b;

    total = v1 + v2;
    return total;
}

alert(jumlahVolumeDuaKubus(8, 3));
alert(jumlahVolumeDuaKubus(5, 2));