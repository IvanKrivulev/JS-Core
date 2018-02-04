function subsequence(input) {
    let result = [];
    let biggest = Number.NEGATIVE_INFINITY;
    input.forEach(function (e) {
        if (e >= biggest){
            result.push(e);
            biggest = e;
        }
    });
    result.forEach(e => console.log(e));
}