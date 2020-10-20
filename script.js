var s = '';
for(var i = 10; i > 0; i--){
    for( var h = 10; h >= i; h--){
        s += '*'
    }
    s += '\n';
}
console.log(s);