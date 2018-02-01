function process(arr) {
    let result = arr.filter((e, i) => i % 2 !== 0)
        .map(n => n * 2)
        .reverse();

    console.log(result.join(" "));
}



process([1,2,3,4,5,6]);