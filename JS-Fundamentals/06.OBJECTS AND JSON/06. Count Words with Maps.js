function count(arr) {
    let words = arr.join("\n").toLowerCase().split(/\W+/g).filter(e => e !== "");
    let result = new Map();

    for (let word of words) {
        if (!result.has(word)){
            result.set(word, 0);
        }
        result.set(word, result.get(word) + 1);
    }
    [...result].sort().forEach(([word, times]) => console.log(`'${word}' -> ${times} times`));
}