function round(input) {
    let [num, precision] = input;
    let d = Math.pow(10, precision);
    console.log((Math.round(num * d) / d));
}

round([10.50000000000000000, 3]);

//second solution
function rounding(input) {
    let [number, precision] = input;
    if (precision > 15){
        precision = 15;
    }

    console.log(+number.toFixed(precision));
}