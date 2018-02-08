function markets(arr) {
    let result = new Map();

    for (let line of arr) {
        let [town, product, value] = line.split(" -> ");
        value = value.split(" : ").reduce((a, b) => a * b);

        if(!result.has(town)){
            result.set(town, new Map());
        }
        if(!result.get(town).has(product)){
            result.get(town).set(product, 0);
        }

        let oldIncome = result.get(town).get(product);

        result.get(town).set(product, oldIncome + value);
    }

    for (let [town, products] of result) {
        console.log(`Town - ${town}`);
        for (let [product, value] of products) {
            console.log(`$$$${product} : ${value}`);
        }
    }
}