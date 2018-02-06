function capture(arr) {
    let regex = /\d+/g;
    let result = [];

    for (let line of arr) {
        let match = line.match(regex);
        if (match === null) continue;
        for (let m of match) {
            result.push(m);
        }
    }
    console.log(result.join(" "));
}

/* --- another solution
function capture(arr) {
    let text = arr.join(" ");
    let regex = /\d+/g;
    let match = text.match(regex);
    console.log(match.join(" "));
}
*/