function triangle(num) {
    function line(count) {
        console.log("*".repeat(count));
    }
    for (let i = 1; i <= num; i++) line(i);
    for (let i = num - 1; i > 0; i--) line(i);

}
triangle(3);

