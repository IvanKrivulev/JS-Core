function solve(json) {
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

    let objArr = JSON.parse(json);
    let html = "<table>\n";

    // first line
    html += "   <tr>";
    for (let key of Object.keys(objArr[0])) {
        html += `<th>${key}</th>`;
    }
    html += "</tr>\n";


    for (let obj of objArr) {
        html += `   <tr>`;

        let keys = Object.keys(obj);

        for (let key of keys) {
            if (Number(obj[key])){
                html += `<td>${Number(obj[key])}</td>`
            }else{
                html += `<td>${escapeHTML(obj[key])}</td>`
            }
        }

        html += "</tr>\n";
    }
    html += "</table>";

    console.log(html);
}

solve('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');
