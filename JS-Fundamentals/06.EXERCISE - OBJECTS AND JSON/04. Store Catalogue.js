function solve(arr) {
    let myMap = new Map();
    for (let line of arr) {
        let [product, price] = line.split(" : ");
        let letter = product[0];
        price = Number(price);

        if (!myMap.has(letter)){
            myMap.set(letter, new Map());
        }
        if (!myMap.get(letter).has(product)){
            myMap.get(letter).set(product, 0);
        }
        myMap.get(letter).set(product, price);
    }

    [...myMap].sort();

    [...myMap].sort().forEach(([letter, items]) => {
     console.log(`${letter}`);
        items = [...items].sort((a, b) => a[0].localeCompare(b[0]));
        [...items].forEach(([product, price]) => console.log(`  ${product}: ${price}`));
    });

}

solve([
    "Banana : 2",
    "Rubic's Cube : 5",
    "Raspberry P : 4999",
    "Rolex : 100000",
    "Rollon : 10",
    "Rali Car : 2000000",
    "Pesho : 0.000001",
    "Barrel : 10"
]);