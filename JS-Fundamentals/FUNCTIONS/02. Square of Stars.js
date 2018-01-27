function square(num) {
    function line(count) {
        console.log("*" + " *".repeat(count-1));
    }

    for (let i = 0; i < num; i++) {
        line(num);
    }
}

square(5);