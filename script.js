function cetakAngka(n) {
    if(n === 0){
        return;
    }
    console.log(n);
    cetakAngka(n-1);
}

cetakAngka(10);


function faktorial(a) {
    
    if(a === 0) return 1;

    return a * faktorial(a-1);
}

console.log (faktorial(5));