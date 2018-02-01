function figure (n){
    let rows = n % 2 === 0 ? n - 1 : n;
    let dashCount = (2*n - 4) / 2;
    let middle = Math.ceil(n / 2);

    for (let i = 1; i <= rows; i++) {
        if (i === 1 || i === middle || i === rows){
            console.log(`+${"-".repeat(dashCount)}+${"-".repeat(dashCount)}+`);
        }
        else{
            console.log(`|${" ".repeat(dashCount)}|${" ".repeat(dashCount)}|`);
        }
    }
}

figure(5);
