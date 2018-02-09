function solve(arr) {
    let myMap = new Map();
    for (let line of arr) {
        let [brand, model, producedCars] = line.split(" | ");
        producedCars = Number(producedCars);
        if (!myMap.has(brand)){
            myMap.set(brand, new Map())
        }
        if(!myMap.get(brand).has(model)){
            myMap.get(brand).set(model, 0);
        }
        let oldValue = myMap.get(brand).get(model);
        myMap.get(brand).set(model, oldValue + producedCars);
    }

    [...myMap].forEach(([brand, models]) => {
        console.log(`${brand}`);
        [...models].forEach(([model, numbers]) => console.log(`###${model} -> ${numbers}`));
    })
}

solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);