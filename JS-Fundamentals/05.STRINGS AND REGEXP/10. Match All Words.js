function solve(text) {
    let regex = /\w+/g;
    console.log(text.match(regex).join("|"));
}

solve("_(Underscores) are also word characters");