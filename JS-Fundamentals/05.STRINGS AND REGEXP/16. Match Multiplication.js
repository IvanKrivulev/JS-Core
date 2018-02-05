function match(text) {
    let regex = /([-\d]+)\s*\*\s*([.\d]+)/g;

    function replace(match, g1, g2) {
        return Number(g1) * Number(g2);
    }
    text = text.replace(regex, replace);

    console.log(text);
}

match("My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2 * 0.5 (deposit).");