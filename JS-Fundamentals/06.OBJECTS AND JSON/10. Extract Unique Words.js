function solve(arr) {
    let mySet = new Set();
    let text = arr.join("\n");
    let words = text.split(/\W+/)
        .filter(e => e !== "")
        .map(e => e.toLowerCase())
        .forEach(e => mySet.add(e));

    console.log([...mySet].join(", "));
}