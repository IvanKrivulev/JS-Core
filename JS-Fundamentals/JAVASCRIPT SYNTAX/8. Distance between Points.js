function distance(x1, y1, x2, y2) {
    let a = Math.abs(x1 - x2);
    let b = Math.abs(y1 - y2);
    let dist = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    return dist;
}