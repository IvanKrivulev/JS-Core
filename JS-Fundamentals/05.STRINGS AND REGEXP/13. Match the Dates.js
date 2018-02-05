function solve(arr) {
    let regex = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d+)\b/gm;
    let result = regex.exec(arr);

    while (result !== null){
        let [date, day, month, year] = result;

        console.log(`${date} (Day: ${day}, Month: ${month}, Year: ${year})`)
        result = regex.exec(arr);
    }

}

solve(["1-Jan-1999", "1-Jan-1998"]);