function imperial(number) {
    let feet = Math.floor(number / 12);
    let inches = number % 12;
    console.log(`${feet}'-${inches}"`)

}

imperial(11);