function extract(text) {
    let result = [];
    let startIndex = text.indexOf("(");
    while (startIndex > -1){
        let endIndex = text.indexOf(")", startIndex);
        if (endIndex === -1){
            break;
        }
        let section = text.substring(startIndex + 1, endIndex);
        result.push(section);
        startIndex = text.indexOf("(", endIndex);
    }
    console.log(result.join(", "));
}