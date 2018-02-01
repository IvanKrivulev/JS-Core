function solve(arr) {
    let result = [];
    for (let index in arr) {
        if (index % 2 === 0){
            result.push(arr[index]);
        }
    }
    return result.join(" ");
}

/* - second solution
arr => arr.filter((a, i) => i % 2 === 0).join(" ");
 */

