function usernames(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let [name, domain] = arr[i].split("@");
        name += ".";
        let domainTokens = domain.split(".");
        domainTokens.forEach(e => name += e[0]);
        result.push(name);
    }
    console.log(result.join(', '));
}


/* --- another solution
function solve(arr) {
    let users = arr.map(line => line.split("@"));
    let result = [];

    for (let user of users) {
        let [name, domain] = user;
        let domainTokens = domain.split(".");
        domainTokens = domainTokens.map(e => e[0]);
        let username = name + "." + domainTokens.join("");

        result.push(username);
    }
    console.log(result.join(', '));
}
 */
