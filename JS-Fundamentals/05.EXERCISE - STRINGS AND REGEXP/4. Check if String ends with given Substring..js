function check2(mainStr, subString) {
    if (mainStr.endsWith(subString)){
        return true;
    }
    return false;
}

/*
function check(mainStr, subString) {
    let section = mainStr.substr(-subString.length);
    return (section === subString ? true : false);
}
 */
