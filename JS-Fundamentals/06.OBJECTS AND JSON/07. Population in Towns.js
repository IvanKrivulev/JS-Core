function population(arr) {
    let result = new Map();
    for (let line of arr) {
        let tokens = line.split(/\s*<->\s*/g).filter(e => e !== "");
        let town = tokens[0];
        let value = Number(tokens[1]);
        if(!result.has(town)){
            result.set(town, 0);
        }
        result.set(town, result.get(town) + value);
    }

    [...result].forEach(([town, population]) => console.log(`${town} : ${population}`));
}