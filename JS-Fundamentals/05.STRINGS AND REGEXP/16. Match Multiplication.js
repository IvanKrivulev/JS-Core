function match(text) {
    let regex = /([-\d]+)\s*\*\s*([.\d-]+)/g;

    function replace(match, g1, g2) {
        return Number(g1) * Number(g2);
    }
    text = text.replace(regex, replace);

    console.log(text);
}

match("My bill is: 4 * 2.50 (beer); 12* 1.50 (kepab); 1  *4.50 (salad); 2  * -0.5 (deposit).");