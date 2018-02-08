function lowest(arr) {
    let result = new Map();

    for (let line of arr) {
        let [town, product, price] = line.split(/\s+\|\s+/g);
        if(!result.has(product)){
            result.set(product, new Map());
        }
        result.get(product).set(town, Number(price));
    }

    for (let [product, towns] of result) {
        let minPrice = Number.MAX_VALUE;
        let minPriceTown = "";
        for (let [town, price] of towns) {
            if (price < minPrice){
                minPrice = price;
                minPriceTown = town;
            }
        }
        console.log(`${product} -> ${minPrice} (${minPriceTown})`);
    }
}