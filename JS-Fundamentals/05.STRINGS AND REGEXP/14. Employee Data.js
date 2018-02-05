function solve(arr) {
    let regex = new RegExp(/^([A-Z][a-zA-Z]*) - ([1-9]\d*) - ([a-zA-Z\d\- ]+)$/);
    for (let entry of arr) {
        let match = regex.exec(entry);
        if (match === null) continue;
        let [fullMatch, name, salary, position] = match;
        console.log(`Name: ${name}\nPosition: ${position}\nSalary: ${salary}`);
    }
}


/*
function solve(arr) {
    let regex = new RegExp(/^([A-Z][a-zA-Z]*) - ([1-9]\d*) - ([a-zA-Z\d\- ]+)$/);
    for (let entry of arr) {
        let match = regex.exec(entry);
        if (match){
            console.log(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`);
        }
    }
}
 */


