function score(text) {
    let str = JSON.parse(text);
    let html = "<table>\n";
    html += "  <tr><th>name</th><th>score</th></tr>\n";

    for (let obj of str) {
        html += `   <tr><td>${escapeHTML(obj.name)}</td><td>${obj.score}</td></tr>\n`;
    }

    return html + "</table>";


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
}