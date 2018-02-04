function isMagic(matrix) {
    let initialSum = matrix[0].reduce((a, b) => a + b);

    for (let i = 1; i < matrix.length; i++) {
        let rowSum = matrix[i].reduce((a, b) => a + b);
        if (rowSum !== initialSum){
            return false;
        }
    }

    for (let row = 0; row < matrix[0].length; row++) {
        let colSum = 0;

        for (let col = 0; col < matrix.length; col++) {
            colSum += matrix[col][row];
        }
        if (colSum !== initialSum){
            return false;
        }
    }

    return true;
}