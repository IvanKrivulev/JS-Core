function solve(arr) {
    let result = [];
    for (let element of arr) {
        if (element >= 0){
            result.push(element);
        }else{
            result.unshift(element);
        }
    }
    console.log(result.join("\n"));
}

solve([7, -2, 8, 9]);

/* - second solution
let solve2 = arr => {
    let result = [];
    arr.forEach(e => (e < 0) ? result.unshift(e) : result.push(e));
    return result
};
 */
