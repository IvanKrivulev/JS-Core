function extract(arr) {
    let regex = /www\.([A-Za-z0-9-]+)(\.[a-z]+)+/g;

    for (let line of arr) {
        let match = regex.exec(line);
        while (match){
            console.log(match[0]);
            match = regex.exec(line);
        }
    }
}