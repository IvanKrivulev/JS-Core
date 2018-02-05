function form(username, email, phone, data) {
    data.forEach(line => {
        line = line.replace(/<![A-Za-z]+!>/g, username);
        line = line.replace(/<@[A-Za-z]+@>/g, email);
        line = line.replace(/<\+[A-Za-z]+\+>/g, phone);
        console.log(line);
    })
}

/* --- another solution
function form(username, email, phone, data) {
    function replacement(match, group) {
        switch (group){
            case '!': return username;
            case '@': return email;
            case '+': return phone;
        }
    }
    data.forEach(line => {
        line = line.replace(/<([!@+])[a-zA-Z]+([!@+])>/g, replacement);
        console.log(line);
    })
}
 */
