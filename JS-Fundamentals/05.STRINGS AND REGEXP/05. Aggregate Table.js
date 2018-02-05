function aggregate(arr) {
    let cities = [];
    let sum = 0;
    for (let line of arr) {
        let townData = line.split("|"), townName = townData[1].trim(), income = Number(townData[2].trim());
        cities.push(townName);
        sum += income;
    }
    console.log(cities.join(", ") + "\n" + sum);
}