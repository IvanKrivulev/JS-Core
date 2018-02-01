function dist(arr) {
    let firstV = arr[0];
    let secondV = arr[1];
    let time = arr[2] / 3600;

    let dist1 = firstV * time;
    let dist2 = secondV * time;

    let finalResult = Math.abs(dist1 - dist2);
    console.log(finalResult * 1000);
}