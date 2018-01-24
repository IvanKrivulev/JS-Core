function multiplicationTable(num) {
    let html = '<table border="1">\n';
    html += "\t<tr>";
    for (let i = 0; i <= num; i++) {
        if ( i === 0 ){
            html += "<th>x</th>";
        }
        else{
            html += `<th>${i}</th>`;
        }
    }
    html += "</tr>\n";

    for (let i = 1; i <= num; i++) {
        html += `\t<tr><th>${i}</th>`;
        for (let j = 1; j <= num; j++) {
            html += `<td>${j*i}</td>`;
        }
        html += "</tr>\n";
    }
    html += "</table>";
    return html;
}


multiplicationTable(3);