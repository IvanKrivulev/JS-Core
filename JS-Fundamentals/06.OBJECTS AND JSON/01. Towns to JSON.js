function towns(arr) {
    arr.shift();
    let result = [];
    for (let row of arr) {
        let tokens = row.split("|")
            .filter(e => e !== "")
            .map(e => e.trim());

        let town ={
            Town: tokens[0],
            Latitude: Number(tokens[1]),
            Longitude: Number(tokens[2])
        };
        result.push(town);
    }
    return JSON.stringify(result);
}
