function censorship(text, stringArr) {
    for (let current of stringArr) {
        let replaced = "-".repeat(current.length);
        while (text.indexOf(current) > -1){
            text = text.replace(current, replaced)
        }
    }
    return text;
}