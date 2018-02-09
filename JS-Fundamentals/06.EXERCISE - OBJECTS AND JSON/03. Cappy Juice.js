function solve(arr) {
    let fruits = new Map();
    let result = new Map();

    for (let line of arr) {
        let [fruit, quantity] = line.split(" => ");

        quantity = Number(quantity);

        if(!fruits.has(fruit)){
            fruits.set(fruit, 0);
        }
        let oldQ = fruits.get(fruit);
        fruits.set(fruit, oldQ + quantity);

        if (fruits.get(fruit) >= 1000){
            result.set(fruit, fruits.get(fruit));
        }
    }

    [...result].forEach(([fruit, bottles]) => console.log(`${fruit} => ${Math.floor(bottles / 1000)}`));
}