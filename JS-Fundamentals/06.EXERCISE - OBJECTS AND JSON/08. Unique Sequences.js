function solve(arr) {
    let mySet = new Set();
    for (let element of arr) {
        let currentArray = JSON.parse(element);
        currentArray = currentArray.sort((a, b) => {
            if (a < b) return 1;
            if (a > b) return -1;
        });
        mySet.add(JSON.stringify(currentArray));
    }

    mySet = [...mySet].sort((a, b) => {
        if (JSON.parse(a).length > JSON.parse(b).length) return 1;
        if (JSON.parse(a).length < JSON.parse(b).length) return -1;
    });

    for (let array of mySet) {
        let toNums = JSON.parse(array);
        console.log(`[${toNums.join(", ")}]`);
    }
}
solve([
    '[7.14, 7.180, 7.339, 80.0990000000000]',
    '[7.339, 80.0990, 7.140000, 7.18]',
    '[7.339, 7.180, 7.14, 80.099]'
]);


