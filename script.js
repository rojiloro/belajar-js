var s = '';

for(var i = 1; i <= 5; i++){
    for(y = 5; y > i; y--){
        s += ' ';
    }
    for(b = 1; b <= i+(i-1); b++){
        s += '*'
    }
s += '\n';
}
for(var i = 1; i <= 5; i++){
    for(y = 1; y <= i; y++){
        s += ' ';
    }
    for(b = 7; b >= i+(i-1); b--){
        s += '*';
    }
s += '\n';
}
console.log(s);

// 1. jumlah bintang +2 -> i + (i - 1)
// 2. spasi = n - baris