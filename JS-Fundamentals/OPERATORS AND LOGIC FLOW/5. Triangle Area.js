function triangleArea(a, b, c) {
    let hP = (a + b + c) / 2;
    let area = Math.sqrt((hP * (hP - a) * (hP - b) * (hP - c)));
    console.log(area);
}