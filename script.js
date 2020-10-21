var s = '';
for(var i = 1; i <= 10; i++){
    for( var h = 10; h >= i; h--){
            s += '*';
    }
    s += '\n';
    for( var b = 1; b <= i; b++){
        s += ' ';
    }    
}
console.log(s);