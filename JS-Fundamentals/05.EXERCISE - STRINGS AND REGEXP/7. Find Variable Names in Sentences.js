function find(text) {
    let regex = /_([A-Za-z0-9]+)/g;
    let result = [];
    let match = regex.exec(text);

    while (match !== null){
        result.push(match[1]);
        match = regex.exec(text);
    }
    console.log(result.join(","));
}