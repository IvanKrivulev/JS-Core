function templateFormat(array) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';

    function printSections(arrLength, arr) {
        for (let i = 0; i < arrLength; i+=2) {
            let question = arr[i];
            let answer = arr[i+1];
            xml += ` <question>\n\t${question}\n </question>\n <answer>\n\t${answer}\n </answer>\n`;
        }

    }
    printSections(array.length, array);
    xml += "</quiz>";
    return xml;
}

console.log(templateFormat(['Dry ice is a frozen form of which gas?',
    'Carbon Dioxide',
    'What is the brightest star in the night sky?',
    'Sirius']
));