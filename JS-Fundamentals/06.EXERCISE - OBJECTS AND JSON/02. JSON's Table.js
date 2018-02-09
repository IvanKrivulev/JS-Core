function solve(arr) {
    function escapeHTML(text) {
        let map = {
            '"': '&quot;',
            '&': '&amp;',
            "'": '&#39;',
            '<': '&lt;',
            '>': '&gt;',
        };

        return text.replace(/[\\"&'<>]/g, c => map[c]);
    }

    let html = "<table>\n";

    for (let line of arr) {
        let object = JSON.parse(line);
        html += "  <tr>\n";
        for (let key of Object.keys(object)) {
            if (Number(object[key])){
                html += `    <td>${object[key]}</td>\n`;
            }else {
                html += `    <td>${escapeHTML(object[key])}</td>\n`;
            }
        }
        html += "  <tr>\n";
    }

    html += "</table>";
    console.log(html);
}

solve([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]);