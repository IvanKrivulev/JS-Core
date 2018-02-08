function sum(arr) {
    let towns = {};
    for (let i = 0; i < arr.length; i+=2) {
        let town = arr[i];
        let value = Number(arr[i + 1]);
        if (!towns.hasOwnProperty(town)){
            towns[town] = 0;
        }
        towns[town] += value;
    }
    console.log(JSON.stringify(towns));
}