function smallestTwoNums(arr) {
    arr.sort((a, b) => a - b);
    console.log(arr.slice(0, 2));
}

smallestTwoNums([1,2,3,4,5,6,7]);