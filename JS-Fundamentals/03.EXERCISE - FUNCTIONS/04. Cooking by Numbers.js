function cookingByNumbers(array) {
    let startNum = Number(array[0]);
    array.shift();
    for (let i = 0; i < array.length; i++) {
        startNum = operation(startNum, array[i]);
        console.log(startNum);

    }
    function operation(number, operation) {
        switch (operation){
            case "chop": return number / 2;
            case "dice": return Math.sqrt(number);
            case "spice": return ++number;
            case "bake": return number * 3;
            case "fillet": return number -= 0.2 * number;
            default:
                console.log("error");
        }
    }
}

cookingByNumbers([32, 'chop', 'chop', 'chop', 'chop', 'chop']);