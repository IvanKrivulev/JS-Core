function modify(startNum) {
    let sum = sumOfDigits(startNum);
    let numString = startNum.toString();
    let digitsCount = numString.length;
    let average = sum / digitsCount;

    while (average <= 5){
        numString += "9";
        sum += 9;
        digitsCount++;
        average = sum / digitsCount;
    }

    console.log(numString);

    function sumOfDigits(number) {
        let sum = 0;
        while (number){
            sum += number % 10;
            number = Math.floor(number / 10);
        }
        return sum;
    }
}

modify(101);