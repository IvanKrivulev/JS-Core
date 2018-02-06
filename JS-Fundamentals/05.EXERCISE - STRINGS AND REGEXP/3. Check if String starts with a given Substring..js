function check(mainStr, subString) {
    let section = mainStr.substring(0, subString.length);
    return (section === subString ? true : false);
}

/* --- second solution
function check2(mainStr, subString) {
    if (mainStr.startsWith(subString)){
        return true;
    }
    return false;
}
 */


