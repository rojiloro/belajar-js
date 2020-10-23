var t = 20;
var g = 10;
var s = '';

for(var i = 1; i <= t; i++){
    if( i <= g ){
        for( var h = 0; h < i; h++){
                s += '*';
        }
    }else{
        for( var y = 20; y > i; y--){
                s += '*';
        }
    }
s += '\n';
}
console.log(s);