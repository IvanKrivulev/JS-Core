function count(arr) {
    let result = {};
    let tokens = arr[0].split(/\W+/g).filter(e => e !== "");

    for (let token of tokens) {
        if (!result.hasOwnProperty(token)){
            result[token] = 0;
        }
        result[token]++;
    }
    console.log(JSON.stringify(result));
}