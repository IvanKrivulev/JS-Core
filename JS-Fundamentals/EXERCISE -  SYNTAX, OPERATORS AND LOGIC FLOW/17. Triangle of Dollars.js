function triangles(num) {
    let line = "";

    for (let row = 0; row < num; row++) {
        for (let col = 0; col < 1; col++) {
            line += "$";
        }
        console.log(line);
    }

}

triangles(5);