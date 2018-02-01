function quadraticEquation(a, b, c) {
    let x; let x1; let x2;
    let disc = Math.pow(b, 2) - (4 * a * c);

    if (disc > 0){
        x1 = (-b + Math.sqrt(disc)) / (2 * a);
        x2 = (-b - Math.sqrt(disc)) / (2 * a);
        console.log(Math.min(x1, x2));
        console.log(Math.max(x1, x2));
    }
    else if (disc === 0){
        x = -b / (2 * a);
        console.log(x);
    }
    else{
        console.log("No");
    }
}

quadraticEquation(6, 11, -35);