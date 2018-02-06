function find(text, word) {
    let regex = new RegExp('\\b' + word + '\\b', 'gi');
    let match = regex.exec(text);
    let count = 0;

    while (match){
        count++;
        match = regex.exec(text);
    }
    console.log(count);
}