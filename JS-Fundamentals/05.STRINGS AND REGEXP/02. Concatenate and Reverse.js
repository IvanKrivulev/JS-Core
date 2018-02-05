function concat(arr) {
    let str = arr.join("");
    let chars = Array.from(str);
    let revChars = chars.reverse()

    return revChars.join("");
}
/* --- second solution
arr => Array.from(arr.join("")).reverse().join("");
 */
