var s = '';

for(var i = 0; i < 8; i++){
    for(var j = 0; j < 8; j++){
        if( (i % 2 == 0 && j % 2 == 0) || ( i % 2 == 1 && j % 2 == 1) ){
            s += '#';
        }else{
            s += ' ';
        }
    }

s += '\n';
}
console.log(s);

// 1. baris pertama 10 karakter (# dan spasi)
// 2. baris kedua 10 karakter (spasi dan #)