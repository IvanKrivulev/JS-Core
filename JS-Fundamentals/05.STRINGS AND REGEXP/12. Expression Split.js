function expressionSplit(str) {
    let regex = /[(),;.\s]+/g;
    let result = str.split(regex);
    console.log(result.join("\n"));
}


/* --- solution with an arrow function
str => console.log(str.split(/[(),;.\s]+/g).join("\n"));
 */
