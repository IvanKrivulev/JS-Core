function lastMonth(input) {
    let [day, month, year] = input;
    let date = new Date(year, month - 1, 0);
    return date.getDate();
}
