function solve(arr){
    let mySet = new Set();
    for (let username of arr) {
        mySet.add(username);
    }
    mySet = [...mySet].sort((a, b) => {
        if (a.length > b.length) return 1;
        if (a.length < b.length) return -1;
        if (a > b) return 1;
        if (a < b) return -1;

    });
    [...mySet].forEach(e => console.log(e));
}
solve([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);
