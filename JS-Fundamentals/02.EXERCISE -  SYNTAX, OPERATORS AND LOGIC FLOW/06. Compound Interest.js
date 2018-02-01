function interest(input) {
    let [p, i, cp, t] = input;
    let n = 12 / cp;
    i = i / 100;

    let power = n * t;
    let result = p * Math.pow((1 + i/n), power);
    console.log(result.toFixed(2));
}