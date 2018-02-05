function count(str, text) {
    let count = 0;
    let idx = text.indexOf(str);

    while (idx > -1){
        count++;
        idx = text.indexOf(str, idx + 1);
    }

    console.log(count);
}

count("haha", "hahaha");